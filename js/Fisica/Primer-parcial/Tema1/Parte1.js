// js/Fisica/Primer-parcial/Tema1/Parte1.js

export const parte1 = {
    getHTML: () => `
        <section class="topic-section">
            <h3>Parte 1: Gráficas del MRU (Interactivo)</h3>
            <p>Observa cómo cambian las gráficas de posición vs. tiempo (x-t) y velocidad vs. tiempo (v-t) en un Movimiento Rectilíneo Uniforme. En MRU, la velocidad es constante.</p>
            <div class="controls">
                <span>Velocidad (m/s): </span>
                <input type="range" id="mru-velocity-slider" min="-10" max="10" value="5" step="1">
                <span id="mru-velocity-value">5 m/s</span>
            </div>
            <canvas id="mru-canvas" class="interactive-canvas" width="600" height="300"></canvas>
        </section>
    `,
    init: () => {
        const slider = document.getElementById('mru-velocity-slider');
        const valueLabel = document.getElementById('mru-velocity-value');
        const canvas = document.getElementById('mru-canvas');
        if (!slider || !canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        const draw = () => {
            const v = parseFloat(slider.value);
            valueLabel.textContent = `${v} m/s`;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Estilo
            ctx.fillStyle = '#f4f4f4';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = '14px Oswald';
            ctx.fillStyle = '#333';
            
            // Ejes
            const padding = 30;
            ctx.beginPath();
            ctx.strokeStyle = '#617891';
            // Eje Y (x-t)
            ctx.moveTo(padding, padding);
            ctx.lineTo(padding, canvas.height / 2);
            // Eje X (x-t)
            ctx.moveTo(padding, canvas.height / 2);
            ctx.lineTo(canvas.width - padding, canvas.height / 2);
            // Eje Y (v-t)
            ctx.moveTo(padding, canvas.height / 2 + padding);
            ctx.lineTo(padding, canvas.height - padding);
            // Eje X (v-t)
            ctx.moveTo(padding, canvas.height - padding);
            ctx.lineTo(canvas.width - padding, canvas.height - padding);
            ctx.stroke();
            
            // Labels
            ctx.fillText('x(m)', 5, canvas.height / 4);
            ctx.fillText('t(s)', canvas.width / 2, canvas.height / 2 + 15);
            ctx.fillText('v(m/s)', 5, canvas.height * 0.75);
            ctx.fillText('t(s)', canvas.width / 2, canvas.height - 5);
            
            // Gráfica x-t (x = v*t)
            ctx.beginPath();
            ctx.strokeStyle = '#D5B893';
            ctx.lineWidth = 3;
            const midY_xt = canvas.height / 2;
            ctx.moveTo(padding, midY_xt);
            // La pendiente es -v porque el canvas Y aumenta hacia abajo
            ctx.lineTo(canvas.width - padding, midY_xt - v * 5);
            ctx.stroke();
            
            // Gráfica v-t (v = constante)
            ctx.beginPath();
            ctx.strokeStyle = '#6F4D38';
            ctx.lineWidth = 3;
            const midY_vt = canvas.height - padding;
            ctx.moveTo(padding, midY_vt - v * 5 - padding);
            ctx.lineTo(canvas.width - padding, midY_vt - v * 5 - padding);
            ctx.stroke();
            ctx.lineWidth = 1;
        };
        
        slider.addEventListener('input', draw);
        draw(); // Dibujo inicial
    }
};