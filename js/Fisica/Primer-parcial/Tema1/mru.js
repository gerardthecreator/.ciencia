// Este archivo contiene toda la información para el Tema 1: MRU
// Combinando teoria.js, parte1.js, etc. en un solo módulo exportable.

const teoria = {
    contenido: `
        <h1>Conceptos Fundamentales y MRU</h1>
        <p>
            Para describir el movimiento, primero necesitamos un <b>sistema de referencia</b>. Es un punto o conjunto de puntos que consideramos fijos. Una vez que lo tenemos, podemos definir varios conceptos clave.
        </p>
        
        <h3>Posición, Desplazamiento y Distancia</h3>
        <ul>
            <li><b>Posición ($\vec{x}$):</b> Es un vector que indica la ubicación de un objeto respecto al origen del sistema de referencia. En una dimensión, se representa con un número (positivo o negativo).</li>
            <li><b>Desplazamiento ($\Delta\vec{x}$):</b> Es el cambio en la posición de un objeto. Se calcula como la posición final menos la posición inicial. Es un vector. Fórmula: $\Delta x = x_f - x_i$</li>
            <li><b>Distancia Recorrida (d):</b> Es la longitud total del camino seguido por el objeto. Es un escalar, siempre positivo.</li>
        </ul>
        <p>
            ¡Ojo, panita! Desplazamiento y distancia no son lo mismo. Si vas de tu casa al quiosco (100m) y vuelves, tu <b>distancia recorrida</b> es 200m, pero tu <b>desplazamiento</b> es 0, porque terminaste donde empezaste.
        </p>
        
        <h3>Velocidad y Rapidez</h3>
        <p>
            <b>Velocidad Media ($\vec{v}_m$):</b> Es el desplazamiento dividido entre el tiempo transcurrido. Es un vector. Fórmula: $\vec{v}_m = \frac{\Delta\vec{x}}{\Delta t}$
        </p>
        <p>
            <b>Movimiento Rectilíneo Uniforme (MRU):</b> Es el movimiento de un objeto que se desplaza en línea recta con <b>velocidad constante</b>. Esto significa que no hay aceleración ($a=0$). La ecuación principal es:
        </p>
        <p style="text-align:center; font-size:1.5rem;">
            $x_f = x_i + v \cdot t$
        </p>
    `,
    video: "k66n_V51GkE" // ID de un video de YouTube sobre el tema
};

const partes = [
    {
        descripcion: `
            <b>Ejemplo Interactivo 1: Posición y Desplazamiento.</b>
            <p>
                Imagina un panita caminando por una línea recta. El punto 0 es su casa. Arrastra al panita (el punto rojo) por la línea y observa cómo cambian los valores de posición inicial, final y el desplazamiento total.
            </p>
        `,
        canvasId: 'canvas-parte1',
        setup: (renderer) => {
            // Lógica de la simulación para la parte 1
            renderer.clear();
            renderer.drawParticle(50, renderer.canvas.height / 2, 10, '#D5B893');
            renderer.ctx.fillStyle = 'white';
            renderer.ctx.font = '16px Oswald';
            renderer.ctx.fillText('Casa (Origen)', 40, renderer.canvas.height / 2 - 20);
            // Aquí iría la lógica para hacerlo interactivo (arrastrar el punto)
        }
    },
    {
        descripcion: `
            <b>Ejemplo Interactivo 2: Gráfica Posición vs. Tiempo (x-t).</b>
            <p>
                Un carro se mueve con MRU a una velocidad de 20 m/s, partiendo de la posición x = 10m. La gráfica x-t es una línea recta. La pendiente de esta recta representa la velocidad.
            </p>
            <p>Pendiente = $\frac{\Delta x}{\Delta t} = v$</p>
        `,
        canvasId: 'canvas-parte2',
        setup: (renderer) => {
            // Lógica para dibujar el gráfico x-t
            renderer.clear();
            const ctx = renderer.ctx;
            const w = renderer.canvas.width;
            const h = renderer.canvas.height;
            
            // Dibujar ejes
            ctx.strokeStyle = '#617891';
            ctx.beginPath();
            ctx.moveTo(30, 20); ctx.lineTo(30, h - 20); ctx.lineTo(w - 20, h - 20);
            ctx.stroke();
            ctx.fillStyle = 'white';
            ctx.fillText('x (m)', 5, 20);
            ctx.fillText('t (s)', w - 20, h - 10);
            
            // Dibujar la recta del MRU
            ctx.strokeStyle = '#D5B893';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(30, h - 30); // x=10m en t=0 (aproximado)
            ctx.lineTo(w - 20, 20); // x aumenta linealmente
            ctx.stroke();
        }
    }
];

// Exportamos un solo objeto que contiene todo el tema
export const tema1_mru = {
    id: 'mru',
    titulo: 'Tema 1: Conceptos y MRU',
    teoria: teoria,
    partes: partes,
    // Aquí añadiríamos los objetos de quiz y auto-quiz
    quiz: null, 
    autoQuiz: null
};