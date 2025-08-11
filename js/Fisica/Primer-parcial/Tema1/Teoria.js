// js/Fisica/Primer-parcial/Tema1/Teoria.js

export const teoria = {
    video: 'HEVO4AIHrMg', // ID del video de YouTube
    getHTML: () => `
        <section class="topic-section">
            <h2>1. Conceptos Fundamentales de la Cinemática</h2>
            <p>
                La cinemática es la rama de la física que describe el movimiento de los objetos sin considerar las causas que lo originan. Para empezar, debemos definir algunos conceptos clave.
            </p>
            <ul>
                <li><strong class="text-concept">Posición (x):</strong> Es la ubicación de un objeto en un sistema de coordenadas. Se representa como un vector.</li>
                <li><strong class="text-concept">Distancia:</strong> Es la longitud total del camino recorrido por un objeto. Es una magnitud escalar.</li>
                <li><strong class="text-concept">Desplazamiento (Δx):</strong> Es el cambio en la posición de un objeto. Es un vector que apunta desde la posición inicial a la final. Se calcula como: <span class="text-highlight">$$ \\Delta x = x_f - x_i $$</span></li>
                <li><strong class="text-concept">Rapidez:</strong> Es la distancia recorrida por unidad de tiempo. Es un escalar.</li>
                <li><strong class="text-concept">Velocidad (v):</strong> Es el desplazamiento por unidad de tiempo. Es un vector. La velocidad media se define como: <span class="text-highlight">$$ \\vec{v}_{media} = \\frac{\\Delta x}{\\Delta t} = \\frac{x_f - x_i}{t_f - t_i} $$</span></li>
                <li><strong class="text-concept">Aceleración (a):</strong> Es el cambio de la velocidad por unidad de tiempo. Es un vector. La aceleración media es: <span class="text-highlight">$$ \\vec{a}_{media} = \\frac{\\Delta v}{\\Delta t} = \\frac{v_f - v_i}{t_f - t_i} $$</span></li>
            </ul>
        </section>

        <section class="topic-section">
            <h2>2. Movimiento Rectilíneo Uniforme (MRU)</h2>
            <p>
                Un objeto se encuentra en MRU cuando se mueve en línea recta con <span class="text-highlight">velocidad constante</span>, lo que implica que su <span class="text-highlight">aceleración es cero</span>.
            </p>
            <p>La única ecuación que describe este movimiento es:</p>
            $$ x_f = x_i + v \\cdot t $$
            <p>Donde $x_f$ es la posición final, $x_i$ la inicial, $v$ la velocidad constante y $t$ el tiempo transcurrido.</p>
        </section>

        <section class="topic-section">
            <h2>3. Movimiento Rectilíneo Uniformemente Variado (MRUV)</h2>
            <p>
                En el MRUV, un objeto se mueve en línea recta con <span class="text-highlight">aceleración constante</span>. Esto significa que su velocidad cambia de manera uniforme con el tiempo.
            </p>
            <p>Las ecuaciones principales del MRUV son:</p>
            $$ v_f = v_i + a \\cdot t $$
            $$ x_f = x_i + v_i \\cdot t + \\frac{1}{2} a \\cdot t^2 $$
            $$ v_f^2 = v_i^2 + 2a \\cdot \\Delta x $$
        </section>

        <section class="topic-section">
            <h2>4. Caída Libre</h2>
            <p>
                La caída libre es un caso particular de MRUV donde la única aceleración que actúa sobre el objeto es la <span class="text-highlight">aceleración de la gravedad (g)</span>, y se considera que actúa hacia abajo.
            </p>
            <p>
                El valor de $g$ es aproximadamente <span class="text-highlight">$9.8 \\, m/s^2$</span>. Las ecuaciones son las mismas del MRUV, pero reemplazando $a$ por $-g$ (si el sistema de referencia es positivo hacia arriba):
            </p>
            $$ v_f = v_i - g \\cdot t $$
            $$ y_f = y_i + v_i \\cdot t - \\frac{1}{2} g \\cdot t^2 $$
        </section>

        <section class="topic-section">
            <h2>Video Explicativo</h2>
            <div class="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/${teoria.video}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </section>
    `
};