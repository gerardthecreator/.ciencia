// js/Fisica/Primer-parcial/Tema2/Teoria.js

export const teoria = {
    video: 'fJ_1_1-x_c0', // Video sobre Movimiento Parabólico
    getHTML: () => `
        <!-- MÓDULO 1: GRAMÁTICA DEL MOVIMIENTO -->
        <section class="topic-section">
            <h2>Módulo 1: La Gramática del Movimiento</h2>
            <p>Definimos con precisión los conceptos que describen CÓMO se mueve un objeto, usando el lenguaje de los vectores y el cálculo.</p>
            
            <h4>Posición, Distancia y Desplazamiento</h4>
            <ul>
                <li><strong class="text-concept">Posición ($\\vec{r}$):</strong> La ubicación de un objeto relativa a un origen. Es un vector.</li>
                <li><strong class="text-concept">Distancia Recorrida:</strong> La longitud total del camino. Es un escalar.</li>
                <li><strong class="text-concept">Desplazamiento ($\\Delta\\vec{r}$):</strong> El cambio neto de posición. Es un vector que une el punto inicial con el final. $\\Delta\\vec{r} = \\vec{r}_{final} - \\vec{r}_{inicial}$.</li>
            </ul>

            <h4>Rapidez vs. Velocidad</h4>
            <ul>
                <li><strong class="text-concept">Rapidez Media:</strong> Escalar que mide la distancia total dividida por el tiempo.</li>
                <li><strong class="text-concept">Velocidad Media ($\\vec{v}_{med}$):</strong> Vector que mide el desplazamiento dividido por el tiempo. $\\vec{v}_{med} = \\frac{\\Delta\\vec{r}}{\\Delta t}$.</li>
                <li><strong class="text-highlight">Velocidad Instantánea ($\\vec{v}$):</strong> La derivada de la posición respecto al tiempo. Es un vector siempre tangente a la trayectoria. $$ \\vec{v}(t) = \\frac{d\\vec{r}}{dt} $$</li>
            </ul>

            <h4>Aceleración</h4>
            <p>La aceleración ($\\vec{a}$) mide la tasa de cambio del vector velocidad. Un objeto acelera si cambia su rapidez, su dirección, o ambas.</p>
            <p class="text-highlight">La aceleración instantánea es la derivada de la velocidad respecto al tiempo.</p>
            $$ \\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{r}}{dt^2} $$
        </section>

        <!-- MÓDULO 2: MOVIMIENTO DE PROYECTILES -->
        <section class="topic-section">
            <h2>Módulo 2: El Movimiento Arquetípico en 2D</h2>
            <p>Analizamos el movimiento de un objeto lanzado bajo la influencia de la gravedad, despreciando la resistencia del aire.</p>
            
            <h4>Principio de Independencia del Movimiento</h4>
            <p>El secreto es descomponer el problema en dos movimientos más simples e independientes:</p>
            <ul>
                <li><strong>Eje Horizontal (X):</strong> Movimiento Rectilíneo Uniforme (MRU), ya que $a_x = 0$. La velocidad $v_x$ es constante.</li>
                <li><strong>Eje Vertical (Y):</strong> Movimiento Rectilíneo Uniformemente Variado (MRUV), con aceleración constante $a_y = -g$.</li>
            </ul>
            
            <h4>Ecuaciones del Juego</h4>
            <p>Dado un lanzamiento con velocidad inicial $v_0$ y ángulo $\\theta$:</p>
            <p><strong>Componentes iniciales:</strong> $v_{0x} = v_0 \\cos(\\theta)$ y $v_{0y} = v_0 \\sin(\\theta)$.</p>
            <p><strong>Ecuaciones de movimiento:</strong></p>
            $$ x(t) = x_0 + v_{0x} t $$
            $$ y(t) = y_0 + v_{0y} t - \\frac{1}{2}gt^2 $$
            $$ v_y(t) = v_{0y} - gt $$
        </section>

        <!-- MÓDULO 3: MOVIMIENTO CIRCULAR -->
        <section class="topic-section">
            <h2>Módulo 3: El Segundo Caso Particular</h2>
            
            <h4>Magnitudes Angulares</h4>
            <p>Para describir el movimiento circular, usamos magnitudes angulares:</p>
            <ul>
                <li><strong>Posición Angular ($\\theta$):</strong> Ángulo barrido (en radianes).</li>
                <li><strong>Velocidad Angular ($\\omega$):</strong> Rapidez del cambio de ángulo ($\\omega = d\\theta/dt$).</li>
                <li><strong>Aceleración Angular ($\\alpha$):</strong> Rapidez del cambio de velocidad angular ($\\alpha = d\\omega/dt$).</li>
            </ul>

            <h4>Movimiento Circular Uniforme (MCU)</h4>
            <p>Ocurre cuando la <span class="text-highlight">rapidez es constante</span> ($\\omega$ es constante, $\\alpha = 0$). Aunque la rapidez no cambia, la dirección del vector velocidad sí lo hace, lo que implica una aceleración.</p>
            <p>Esta es la <strong class="text-concept">Aceleración Centrípeta ($\\vec{a}_c$)</strong>, que siempre apunta hacia el centro del círculo y su módulo es:</p>
            $$ a_c = \\frac{v_t^2}{r} = \\omega^2 r $$

            <h4>Movimiento Circular No Uniforme</h4>
            <p>Si la rapidez también cambia, la aceleración total tiene dos componentes perpendiculares:</p>
            <ul>
                <li><strong>Aceleración Centrípeta ($\\vec{a}_c$):</strong> Cambia la dirección de la velocidad.</li>
                <li><strong>Aceleración Tangencial ($\\vec{a}_t$):</strong> Cambia la magnitud (rapidez) de la velocidad. $a_t = \\alpha r$.</li>
            </ul>
            <p>El módulo de la aceleración total se calcula con Pitágoras: $|\\vec{a}_{total}| = \\sqrt{a_t^2 + a_c^2}$.</p>
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