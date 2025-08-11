// js/Fisica/Primer-parcial/Tema1/Parte2.js

export const parte2 = {
    getHTML: () => `
        <section class="topic-section">
            <h3>Parte 2: Gráficas del MRUV (Interactivo)</h3>
            <p>Ahora, explora las gráficas para un Movimiento Rectilíneo Uniformemente Variado. La aceleración es constante, la velocidad cambia linealmente y la posición cambia cuadráticamente.</p>
            <div class="controls">
                <span>Aceleración (m/s²): </span>
                <input type="range" id="mruv-acceleration-slider" min="-2" max="2" value="1" step="0.2">
                <span id="mruv-acceleration-value">1.0 m/s²</span>
            </div>
            <canvas id="mruv-canvas" class="interactive-canvas" width="600" height="300"></canvas>
        </section>
    `,
    init: () => {
        const slider = document.getElementById('mruv-acceleration-slider');
        const valueLabel = document.getElementById('mruv-acceleration-value');
        const canvas = document.getElementById('mruv-canvas');
        if (!slider || !canvas) return;

        const ctx = canvas.getContext('2d');

        const draw = () => {
            const a = parseFloat(slider.value);
            valueLabel.textContent = `${a.toFixed(1)} m/s²`;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Estilo
            ctx.fillStyle = '#f4f4f4';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = '14px Oswald';
            ctx.fillStyle = '#333';

            // Ejes (similar a Parte 1)
            const padding = 30;
            ctx.beginPath();
            ctx.strokeStyle = '#617891';
            ctx.moveTo(padding, padding); ctx.lineTo(padding, canvas.height / 2);
            ctx.moveTo(padding, canvas.height / 2); ctx.lineTo(canvas.width - padding, canvas.height / 2);
            ctx.moveTo(padding, canvas.height / 2 + padding); ctx.lineTo(padding, canvas.height - padding);
            ctx.moveTo(padding, canvas.height - padding); ctx.lineTo(canvas.width - padding, canvas.height - padding);
            ctx.stroke();
            
            // Labels
            ctx.fillText('x(m)', 5, canvas.height / 4);
            ctx.fillText('t(s)', canvas.width / 2, canvas.height / 2 + 15);
            ctx.fillText('v(m/s)', 5, canvas.height * 0.75);
            ctx.fillText('t(s)', canvas.width / 2, canvas.height - 5);

            // Gráfica v-t (v = a*t)
            ctx.beginPath();
            ctx.strokeStyle = '#D5B893';
            ctx.lineWidth = 3;
            const midY_vt = canvas.height - padding;
            ctx.moveTo(padding, midY_vt - padding);
            ctx.lineTo(canvas.width - padding, midY_vt - a * 10 - padding);
            ctx.stroke();

            // Gráfica x-t (x = 0.5*a*t^2) - Parábola
            ctx.beginPath();
            ctx.strokeStyle = '#6F4D38';
            const midY_xt = canvas.height / 2;
            ctx.moveTo(padding, midY_xt);
            for (let t = 0; t <= 10; t += 0.1) {
                const x_pos = padding + t * (canvas.width - 2 * padding) / 10;
                const y_pos = midY_xt - 0.5 * a * t * t * 0.2; // Escala para que quepa
                ctx.lineTo(x_pos, y_pos);
            }
            ctx.stroke();
            ctx.lineWidth = 1;
        };

        slider.addEventListener('input', draw);
        draw();
    }
};