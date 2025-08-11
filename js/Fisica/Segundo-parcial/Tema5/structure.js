// js/Fisica/Segundo-parcial/Tema5/structure.js

// Este módulo es principalmente teórico y conceptual.
export const tema = {
 title: "Fuerzas Avanzadas y Movimiento General",
 getHTML: () => `
        <section class="topic-section">
            <h2>Lección 1: La Fuerza que se Opone (Rozamiento y Arrastre)</h2>
            
            <h4>Rozamiento por Deslizamiento</h4>
            <p>Es la fuerza que "raspa" entre superficies en contacto y se opone al movimiento. Distinguimos dos tipos:</p>
            <ul>
                <li><strong class="text-concept">Fricción Estática ($\\vec{f}_s$):</strong> Actúa cuando el objeto está quieto. Es variable y se ajusta para evitar el movimiento, hasta un valor máximo: $f_s \\le \\mu_s N$.</li>
                <li><strong class="text-concept">Fricción Cinética ($\\vec{f}_k$):</strong> Actúa cuando el objeto está en movimiento. Es aproximadamente constante: $f_k = \\mu_k N$.</li>
            </ul>
            <p class="text-highlight">Generalmente, el coeficiente estático es mayor que el cinético ($\\mu_s > \\mu_k$), por lo que cuesta más empezar a mover algo que mantenerlo en movimiento.</p>

            <h4>Fuerzas de Arrastre (Resistencia de Fluidos)</h4>
            <p>Es la fricción con un fluido (aire, agua). A diferencia del rozamiento, depende fuertemente de la velocidad. Para objetos cotidianos a altas velocidades, la fuerza de arrastre ($F_D$) es proporcional al cuadrado de la velocidad ($F_D \\propto v^2$).</p>
            <p>Cuando un objeto cae, la fuerza de arrastre aumenta con la velocidad hasta que iguala al peso. En ese punto, la fuerza neta es cero, la aceleración cesa, y el objeto cae a una <strong class="text-concept">velocidad terminal</strong> constante.</p>
        </section>

        <section class="topic-section">
            <h2>Lección 2: Más Allá de la Línea Recta y el Círculo</h2>
            
            <h4>Movimiento en una Trayectoria Curva General</h4>
            <p>En cualquier punto de una trayectoria curva, el vector aceleración ($\\vec{a}$) se puede descomponer en dos componentes perpendiculares:</p>
            <ul>
                <li><strong class="text-concept">Aceleración Tangencial ($\\vec{a}_t$):</strong> Paralela a la trayectoria. Es responsable de cambiar la <strong>rapidez</strong> (el módulo de la velocidad). Su módulo es $a_t = \\frac{d|\\vec{v}|}{dt}$.</li>
                <li><strong class="text-concept">Aceleración Normal ($\\vec{a}_n$):</strong> Perpendicular a la trayectoria, apuntando hacia el centro de curvatura local. Es responsable de cambiar la <strong>dirección</strong> de la velocidad. Su módulo es $a_n = \\frac{v^2}{R}$, donde R es el radio de curvatura.</li>
            </ul>
            <p>El vector aceleración total se escribe como: $ \\vec{a} = \\vec{a}_t + \\vec{a}_n $.</p>
        </section>

        <section class="topic-section">
            <h2>Lección 3: Cuando las Mates Fallan (Integración Numérica)</h2>
            
            <h4>El Método de Euler</h4>
            <p>¿Qué pasa si la fuerza (y la aceleración) no son constantes, sino que dependen de la posición o la velocidad de forma compleja (ej. con arrastre del aire)? Las ecuaciones diferenciales resultantes a menudo no se pueden resolver con papel y lápiz.</p>
            <p>La solución es la <strong class="text-concept">integración numérica</strong>. El método de Euler consiste en dar pequeños pasos en el tiempo ($\\Delta t$) y asumir que la aceleración es constante durante ese breve instante:</p>
            <ol>
                <li>Conozco la posición $\\vec{r}_i$ y velocidad $\\vec{v}_i$ en el instante $t_i$.</li>
                <li>Calculo la aceleración en ese instante: $\\vec{a}_i = \\frac{\\sum \\vec{F}(\\vec{r}_i, \\vec{v}_i)}{m}$.</li>
                <li>Estimo la nueva velocidad y posición:</li>
                $$ \\vec{v}_{i+1} = \\vec{v}_i + \\vec{a}_i \\Delta t $$
                $$ \\vec{r}_{i+1} = \\vec{r}_i + \\vec{v}_i \\Delta t $$
                <li>Repito el proceso. Este es el fundamento de las simulaciones físicas por ordenador.</li>
            </ol>
        </section>

        <section class="topic-section">
            <h2>Lección 4: El Punto que lo Simplifica Todo (Centro de Masas)</h2>
            
            <h4>Definición del Centro de Masas (CM)</h4>
            <p>Es el "punto promedio" de la masa de un sistema. Para un conjunto de partículas, se calcula como un promedio ponderado de sus posiciones:</p>
            $$ \\vec{r}_{CM} = \\frac{\\sum m_i \\vec{r}_i}{M_{total}} $$
            
            <h4>El Teorema del Movimiento del Centro de Masas</h4>
            <p class="text-highlight">El centro de masas de un sistema se mueve como si fuera una única partícula puntual con toda la masa del sistema, sobre la cual actúan únicamente las fuerzas externas.</p>
            $$ \\sum \\vec{F}_{externas} = M_{total} \\cdot \\vec{a}_{CM} $$
            <p>Las fuerzas internas (explosiones, músculos, etc.) pueden crear movimientos internos complejos, pero <strong>no pueden cambiar la trayectoria del centro de masas</strong>. Por ejemplo, el centro de masas de una llave inglesa que gira por el aire sigue una parábola perfecta, ignorando la rotación compleja de la llave.</p>
        </section>
    `
};