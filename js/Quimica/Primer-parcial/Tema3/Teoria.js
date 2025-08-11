// js/Quimica/Primer-parcial/Tema3/Teoria.js
export const teoria = {
 video: 'HcK-a4-oSOE', // Video sobre Números Cuánticos y Orbitales
 getHTML: () => `
        <section class="topic-section">
            <h2>1. De la Física Clásica a la Teoría Cuántica</h2>
            <p>A finales del siglo XIX, la física clásica no podía explicar ciertos fenómenos como la radiación de cuerpo negro. Max Planck propuso que la energía solo podía ser emitida o absorbida en paquetes discretos llamados <strong class="text-concept">cuantos</strong>. La energía de un cuanto es $E = h\\nu$, donde $h$ es la constante de Planck y $\\nu$ es la frecuencia.</p>
            <h4>El Efecto Fotoeléctrico</h4>
            <p>Einstein usó la idea de Planck para explicar el efecto fotoeléctrico, donde la luz que incide sobre una superficie metálica puede expulsar electrones. Propuso que la luz se comporta como partículas (<strong>fotones</strong>).</p>
            <div class="canvas-visualization">
                <canvas id="canvas-photoelectric" width="400" height="200"></canvas>
            </div>
        </section>
        <section class="topic-section">
            <h2>2. La Naturaleza Dual del Electrón y la Mecánica Cuántica</h2>
            <p>De Broglie sugirió que si la luz puede comportarse como partícula, entonces las partículas (como los electrones) pueden tener propiedades ondulatorias. Esto llevó al desarrollo de la <strong class="text-concept">mecánica cuántica</strong>.</p>
            <p>El <strong class="text-highlight">Principio de Incertidumbre de Heisenberg</strong> establece que es imposible conocer simultáneamente con exactitud el momento y la posición de una partícula.</p>
            <p>La ecuación de Schrödinger describe el comportamiento del electrón en un átomo. Sus soluciones, las funciones de onda, nos dan los <strong class="text-concept">orbitales atómicos</strong>: regiones del espacio donde hay una alta probabilidad de encontrar al electrón.</p>
        </section>
        <section class="topic-section">
            <h2>3. Números Cuánticos y Orbitales Atómicos</h2>
            <p>Cada electrón en un átomo se describe por un conjunto de cuatro números cuánticos:</p>
            <ul>
                <li><strong>Número Cuántico Principal ($n$):</strong> Define el nivel de energía principal. ($n=1, 2, 3, ...$).</li>
                <li><strong>Número Cuántico del Momento Angular ($l$):</strong> Describe la forma del orbital. ($l=0, 1, ..., n-1$). $l=0$ es un orbital <strong>s</strong> (esférico), $l=1$ es un orbital <strong>p</strong> (lobular).</li>
                <li><strong>Número Cuántico Magnético ($m_l$):</strong> Describe la orientación del orbital en el espacio. ($m_l = -l, ..., 0, ..., +l$).</li>
                <li><strong>Número Cuántico de Espín ($m_s$):</strong> Describe el espín del electrón. ($m_s = +1/2$ o $-1/2$).</li>
            </ul>
            <div class="canvas-visualization">
                <canvas id="canvas-orbitals" width="400" height="200"></canvas>
            </div>
        </section>
        <section class="topic-section">
            <h2>4. Configuración Electrónica</h2>
            <p>Es la distribución de los electrones de un átomo en sus orbitales. Se rige por tres principios:</p>
            <ul>
                <li><strong>Principio de Aufbau:</strong> Los electrones llenan primero los orbitales de menor energía.</li>
                <li><strong>Principio de Exclusión de Pauli:</strong> No puede haber dos electrones en un mismo átomo con los cuatro números cuánticos idénticos. (Esto implica que en cada orbital caben máximo 2 electrones con espines opuestos).</li>
                <li><strong>Regla de Hund:</strong> La distribución más estable en subniveles es la que tiene el mayor número de espines paralelos. (Los electrones no se aparean en orbitales del mismo subnivel hasta que no haya otra opción).</li>
            </ul>
            <p>Ejemplo para el Nitrógeno (Z=7): $1s^2 2s^2 2p^3$.</p>
        </section>
        <section class="topic-section">
            <h2>Video Explicativo</h2>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/${teoria.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    `
};