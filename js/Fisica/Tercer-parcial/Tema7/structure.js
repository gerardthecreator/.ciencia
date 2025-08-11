// js/Fisica/Tercer-parcial/Tema7/structure.js

// Este módulo es teórico y conceptual, sentando las bases para la Conservación de la Energía.
export const tema = {
 title: "Trabajo y Energía Cinética",
 getHTML: () => `
        <section class="topic-section">
            <h2>Lección 1: Empujar con un Propósito (El Concepto de Trabajo)</h2>
            
            <h4>Trabajo Realizado por una Fuerza Constante</h4>
            <p>
                En física, el <strong class="text-concept">trabajo (W)</strong> es la transferencia de energía a un objeto mediante la aplicación de una fuerza que causa un desplazamiento. Si no hay desplazamiento, no hay trabajo.
            </p>
            <p>
                Solo la componente de la fuerza que está en la dirección del desplazamiento realiza trabajo. Si una fuerza $\\vec{F}$ actúa sobre un objeto que se desplaza una distancia $\\vec{d}$, y el ángulo entre ellos es $\\theta$:
            </p>
            $$ W = (F \\cos\\theta) d $$
            <ul>
                <li>Si $\\theta = 0^\\circ$, el trabajo es máximo y positivo ($W=Fd$).</li>
                <li>Si $\\theta = 90^\\circ$, el trabajo es <strong>cero</strong>. ¡Una fuerza perpendicular al movimiento no realiza trabajo!</li>
                <li>Si $\\theta = 180^\\circ$, el trabajo es negativo ($W=-Fd$), como el realizado por la fricción.</li>
            </ul>

            <h4>El Producto Escalar (Producto Punto)</h4>
            <p>La definición de trabajo es exactamente la del producto escalar entre los vectores fuerza y desplazamiento. Esta es la forma más general y elegante de expresarlo:</p>
            $$ W = \\vec{F} \\cdot \\vec{d} $$
            <p>Si tenemos los vectores en componentes, $ \\vec{F} = F_x\\hat{i} + F_y\\hat{j} $ y $ \\vec{d} = d_x\\hat{i} + d_y\\hat{j} $, el cálculo es directo:</p>
            $$ W = F_x d_x + F_y d_y $$
        </section>

        <section class="topic-section">
            <h2>Lección 2: Cuando la Fuerza No es Constante</h2>
            <p>
                Si la fuerza cambia a medida que el objeto se mueve (como la de un muelle), no podemos usar $W=Fd$. La solución es sumar los pequeños trabajos $dW$ a lo largo de la trayectoria.
            </p>
            <p>
                Gráficamente, el trabajo es el <strong>área bajo la curva</strong> en una gráfica de Fuerza vs. Posición. Con cálculo, esto se convierte en una integral definida:
            </p>
            $$ W = \\int_{x_1}^{x_2} F(x) \\,dx $$
            <p><strong>Ejemplo (Muelle):</strong> La fuerza de un muelle es $F = -kx$. El trabajo que TÚ haces para estirarlo desde $x=0$ hasta $x=X$ es $W_{tu} = \\int_0^X kx \\,dx = \\frac{1}{2}kX^2$.</p>
        </section>

        <section class="topic-section">
            <h2>Lección 3: El Teorema del Trabajo-Energía Cinética</h2>
            
            <h4>Energía Cinética (K)</h4>
            <p>Es la energía asociada al movimiento. Un objeto de masa $m$ y rapidez $v$ tiene una energía cinética:</p>
            $$ K = \\frac{1}{2}mv^2 $$
            <p>Es un escalar y siempre es positiva. ¡Duplicar la rapidez cuadruplica la energía cinética!</p>

            <h4>El Teorema Maestro</h4>
            <p class="text-highlight">El trabajo neto ($W_{neto}$) realizado sobre un objeto (la suma del trabajo de TODAS las fuerzas) es exactamente igual al cambio en su energía cinética ($\\Delta K$).</p>
            $$ W_{neto} = \\Delta K = K_{final} - K_{inicial} = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2 $$
            <p>Este teorema es un "atajo" increíblemente potente que nos permite relacionar fuerzas, distancias y velocidades sin necesidad de calcular la aceleración o el tiempo.</p>
        </section>

        <section class="topic-section">
            <h2>Lección 4: Generalizando el Concepto</h2>
            
            <h4>Trabajo en Trayectorias Curvilíneas</h4>
            <p>Si la trayectoria es una curva, debemos sumar los pequeños trabajos $dW = \\vec{F} \\cdot d\\vec{r}$ a lo largo de toda la curva. Esto se formaliza con una integral de línea:</p>
            $$ W = \\int_{A}^{B} \\vec{F} \\cdot d\\vec{r} $$
            <p>Para fuerzas <strong class="text-concept">conservativas</strong> (como la gravedad), este trabajo no depende del camino, solo del inicio y el final. Para fuerzas <strong class="text-concept">no conservativas</strong> (como la fricción), el camino sí importa.</p>

            <h4>Trabajo y el Centro de Masas</h4>
            <p>El trabajo realizado por las <strong>fuerzas externas</strong> sobre un sistema es igual al cambio en la energía cinética de su centro de masas. Las fuerzas internas (como en una explosión) cambian la energía cinética total del sistema, pero no la del centro de masas.</p>
        </section>
    `
};