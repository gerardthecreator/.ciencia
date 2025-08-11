// js/Fisica/Primer-parcial/Parcial-Resuelto/structure.js

export const tema = {
    title: "Solución del Primer Parcial",
    getHTML: () => `
        <section class="topic-section">
            <h2>Enunciado del Parcial</h2>
            <p>A continuación se muestra la imagen del parcial propuesto. La solución detallada se encuentra más abajo.</p>
            <div class="exam-image-container">
                <img src="assets/parcial.jpg" alt="Imagen del enunciado del primer parcial" class="exam-image">
            </div>
        </section>

        <section class="topic-section">
            <h2>Solución Paso a Paso</h2>
            <p class="enunciado"><strong>NOTA:</strong> Se usará $g = 9,8 \\, m/s^2$ en todos los cálculos.</p>

            <!-- PREGUNTA 1 -->
            <div class="solved-question-container">
                <h4>1.- Cuadrante de un Vector (1 pto)</h4>
                <p class="enunciado"><strong>Enunciado:</strong> Un vector $\\vec{V}$ tiene $V_x < 0$ y $V_y > 0$. Describe el cuadrante y el rango de su ángulo.</p>
                <div class="solution-step">
                    <p><strong>Justificación:</strong> El plano cartesiano se divide en cuatro cuadrantes. El eje X es negativo a la izquierda del origen y el eje Y es positivo por encima del origen. La única región que cumple ambas condiciones ($V_x$ negativa y $V_y$ positiva) es el <strong>Segundo Cuadrante</strong>.</p>
                </div>
                <div class="solution-step">
                    <p><strong>Rango del Ángulo:</strong> El ángulo $\\theta$ se mide desde el eje X positivo en sentido antihorario. El segundo cuadrante comienza después de los 90° (eje Y positivo) y termina en los 180° (eje X negativo).</p>
                    <p><strong>Respuesta Final:</strong> El vector se encuentra en el <strong>Segundo Cuadrante</strong>. El rango de su ángulo $\\theta$ es $90^\\circ < \\theta < 180^\\circ$.</p>
                </div>
            </div>

            <!-- PREGUNTA 2 -->
            <div class="solved-question-container">
                <h4>2.- Gráficas de Movimiento (1 pto)</h4>
                <p class="enunciado"><strong>Enunciado:</strong> Gráficas de posición ($x-t$) y velocidad ($v_x-t$) para una persona que se aleja frenando, se detiene y regresa acelerando.</p>
                <div class="solution-step">
                    <p><strong>a) Gráfica Posición vs. Tiempo ($x-t$):</strong></p>
                    <ul>
                        <li><strong>Ida (frenando):</strong> La posición positiva aumenta, pero la pendiente de la curva disminuye (se aplana), formando una parábola cóncava hacia abajo.</li>
                        <li><strong>Detención:</strong> La curva alcanza un punto máximo donde la pendiente es cero.</li>
                        <li><strong>Regreso (acelerando):</strong> La posición disminuye hacia el origen. La pendiente negativa se hace cada vez más pronunciada, continuando la parábola cóncava hacia abajo.</li>
                    </ul>
                    <p>La gráfica es una parábola que abre hacia abajo, con su vértice en el punto de máxima distancia.</p>
                </div>
                <div class="solution-step">
                    <p><strong>b) Gráfica Velocidad vs. Tiempo ($v_x-t$):</strong></p>
                    <ul>
                        <li><strong>Ida (frenando):</strong> La velocidad es positiva pero disminuye linealmente hasta llegar a cero.</li>
                        <li><strong>Detención:</strong> La velocidad es $v_x = 0$ por un instante.</li>
                        <li><strong>Regreso (acelerando):</strong> La velocidad se vuelve negativa y su magnitud aumenta linealmente.</li>
                    </ul>
                    <p>La gráfica es una <strong>línea recta con pendiente negativa constante</strong> que cruza el eje del tiempo ($v_x=0$) en el instante de la detención.</p>
                </div>
            </div>

            <!-- PREGUNTA 3 -->
            <div class="solved-question-container">
                <h4>3.- Perpendicularidad en Proyectiles (1 pto)</h4>
                <p class="enunciado"><strong>Enunciado:</strong> ¿Existe algún punto en una trayectoria parabólica donde la aceleración y la velocidad son perpendiculares?</p>
                <div class="solution-step">
                    <p><strong>Razonamiento:</strong></p>
                    <ul>
                        <li>El vector <strong>aceleración</strong> ($\\vec{a}$) en un movimiento de proyectiles (sin resistencia del aire) es siempre el vector gravedad, $\\vec{g}$. Este vector siempre apunta <strong>verticalmente hacia abajo</strong>.</li>
                        <li>El vector <strong>velocidad</strong> ($\\vec{v}$) es siempre tangente a la trayectoria.</li>
                        <li>Para que $\\vec{a}$ y $\\vec{v}$ sean perpendiculares, $\\vec{v}$ tendría que ser perfectamente horizontal.</li>
                        <li>El único punto en la trayectoria parabólica donde el vector velocidad es puramente horizontal es en el <strong>punto de altura máxima</strong>. En ese punto, la componente vertical de la velocidad ($v_y$) es momentáneamente cero.</li>
                    </ul>
                    <p><strong>Respuesta Final:</strong> <strong>Sí</strong>, en el punto más alto de la trayectoria (altura máxima), el vector velocidad es horizontal y el vector aceleración es vertical, por lo que son perpendiculares entre sí.</p>
                </div>
            </div>

            <!-- PREGUNTA 4 -->
            <div class="solved-question-container">
                <h4>4.- Operaciones con Vectores (3 ptos)</h4>
                <p class="enunciado"><strong>Enunciado:</strong> Dados $\\vec{A} = -6,3\\hat{i} + 4,2\\hat{j}$, $\\vec{B} = 7,1\\hat{i} + 2,8\\hat{j}$, $\\vec{C} = 5,7\\hat{i} - 9,9\\hat{j}$. Determine $\\vec{D}$ si $\\vec{D} - 2\\vec{C} + 3\\vec{A} - 4\\vec{B} = \\vec{0}$.</p>
                <div class="solution-step">
                    <p><strong>Paso 1: Despejar $\\vec{D}$.</strong></p>
                    $$ \\vec{D} = 2\\vec{C} - 3\\vec{A} + 4\\vec{B} $$
                </div>
                <div class="solution-step">
                    <p><strong>Paso 2: Calcular cada término por separado.</strong></p>
                    $$ 2\\vec{C} = 2(5,7\\hat{i} - 9,9\\hat{j}) = 11,4\\hat{i} - 19,8\\hat{j} $$
                    $$ -3\\vec{A} = -3(-6,3\\hat{i} + 4,2\\hat{j}) = 18,9\\hat{i} - 12,6\\hat{j} $$
                    $$ 4\\vec{B} = 4(7,1\\hat{i} + 2,8\\hat{j}) = 28,4\\hat{i} + 11,2\\hat{j} $$
                </div>
                <div class="solution-step">
                    <p><strong>Paso 3: Sumar las componentes para encontrar $\\vec{D}$.</strong></p>
                    $$ D_x = 11,4 + 18,9 + 28,4 = 58,7 $$
                    $$ D_y = -19,8 - 12,6 + 11,2 = -21,2 $$
                    $$ \\vec{D} = 58,7\\hat{i} - 21,2\\hat{j} $$
                </div>
                <div class="solution-step">
                    <p><strong>Paso 4: Calcular módulo y ángulo de $\\vec{D}$.</strong></p>
                    $$ |\\vec{D}| = \\sqrt{(58,7)^2 + (-21,2)^2} = \\sqrt{3445,69 + 449,44} = \\sqrt{3895,13} \\approx 62,4 $$
                    <p>Como $D_x > 0$ y $D_y < 0$, el vector está en el cuarto cuadrante.</p>
                    $$ \\theta = \\arctan\\left(\\frac{-21,2}{58,7}\\right) \\approx \\arctan(-0,361) \\approx -19,9^\\circ $$
                    <p>O, medido desde el eje x positivo, $\\theta = 360^\\circ - 19,9^\\circ = 340,1^\\circ$.</p>
                    <p><strong>Respuesta Final:</strong> $\\vec{D}$ tiene un módulo de <strong>62,4</strong> y un ángulo de <strong>-19,9°</strong> (o 340,1°).</p>
                </div>
            </div>

            <!-- PREGUNTA 5 -->
            <div class="solved-question-container">
                <h4>5.- Encuentro en Caída Libre (6 ptos)</h4>
                <p class="enunciado"><strong>Enunciado:</strong> Edificio de 800m. Pelota A se lanza hacia abajo a 80 m/s. Pelota B se lanza hacia arriba a 80 m/s. Determine tiempo y altura de cruce, y velocidades.</p>
                <div class="solution-step">
                    <p><strong>Paso 1: Establecer ecuaciones de posición.</strong> Origen en el suelo ($y=0$).</p>
                    <p>Pelota A (cae): $y_A(t) = y_{0A} + v_{0A}t + \\frac{1}{2}gt^2 = 800 - 80t - 4,9t^2$</p>
                    <p>Pelota B (sube): $y_B(t) = y_{0B} + v_{0B}t + \\frac{1}{2}gt^2 = 0 + 80t - 4,9t^2$</p>
                </div>
                <div class="solution-step">
                    <p><strong>a) Tiempo de cruce:</strong> Ocurre cuando $y_A(t) = y_B(t)$.</p>
                    $$ 800 - 80t - 4,9t^2 = 80t - 4,9t^2 $$
                    <p>Los términos $4,9t^2$ se cancelan.</p>
                    $$ 800 = 80t + 80t \\implies 800 = 160t $$
                    $$ t = \\frac{800}{160} = 5,00 \\, s $$
                </div>
                <div class="solution-step">
                    <p><strong>b) Altura de cruce:</strong> Sustituimos $t=5,00$ s en cualquiera de las ecuaciones. Usamos la de B por ser más simple.</p>
                    $$ y_B(5) = 80(5) - 4,9(5)^2 = 400 - 4,9(25) = 400 - 122,5 = 277,5 \\, m $$
                </div>
                <div class="solution-step">
                    <p><strong>c) Velocidades al cruzarse:</strong> Usamos $v(t) = v_0 + gt$.</p>
                    <p>Pelota A: $v_A(5) = v_{0A} + gt = -80 - 9,8(5) = -80 - 49 = -129 \\, m/s$ (hacia abajo).</p>
                    <p>Pelota B: $v_B(5) = v_{0B} + gt = 80 - 9,8(5) = 80 - 49 = 31 \\, m/s$ (hacia arriba).</p>
                    <p><strong>Respuesta Final:</strong> Se cruzan a los <strong>5,00 s</strong>, a una altura de <strong>277,5 m</strong>. Sus velocidades son $v_A = -129 \\, m/s$ y $v_B = 31 \\, m/s$.</p>
                </div>
            </div>

            <!-- PREGUNTA 6 -->
            <div class="solved-question-container">
                <h4>6.- Movimiento de Proyectil (Cañón) (6 ptos)</h4>
                <p class="enunciado"><strong>Enunciado:</strong> $v_0 = 800 \\, m/s$, $y_0 = 15 \\, m$, $\\theta = 46,0^\\circ$. Calcule $h_{max}$, alcance y velocidad a los 117,45 s.</p>
                <div class="solution-step">
                    <p><strong>Paso 1: Descomponer velocidad inicial.</strong></p>
                    $$ v_{0x} = 800 \\cos(46^\\circ) \\approx 555,7 \\, m/s $$
                    $$ v_{0y} = 800 \\sin(46^\\circ) \\approx 575,4 \\, m/s $$
                </div>
                <div class="solution-step">
                    <p><strong>a) Altura máxima ($h_{max}$):</strong> Ocurre cuando $v_y = 0$.</p>
                    $$ v_y^2 = v_{0y}^2 + 2g(y_{max} - y_0) \\implies 0 = (575,4)^2 + 2(-9,8)(y_{max} - 15) $$
                    $$ 19,6(y_{max} - 15) = 331085,16 \\implies y_{max} - 15 = 16892,1 \\implies y_{max} \\approx 16907,1 \\, m $$
                </div>
                <div class="solution-step">
                    <p><strong>b) Alcance máximo (R):</strong> Primero, tiempo de vuelo. Ocurre cuando $y(t) = 0$.</p>
                    $$ 0 = y_0 + v_{0y}t - 4,9t^2 \\implies 0 = 15 + 575,4t - 4,9t^2 $$
                    <p>Resolviendo la ecuación cuadrática, obtenemos $t \\approx 117,45 \\, s$. (La otra solución es negativa y no física).</p>
                    $$ R = x(t) = v_{0x} \\cdot t = 555,7 \\cdot 117,45 \\approx 65269 \\, m \\text{ (o 65,3 km)} $$
                </div>
                <div class="solution-step">
                    <p><strong>c) Velocidad a los 117,45 s:</strong></p>
                    <p>Como calculamos en el paso anterior, el tiempo de vuelo total es de 117,45 s. Esto significa que en ese preciso instante, el proyectil <strong>está impactando contra el suelo</strong>.</p>
                    <p>Calculamos las componentes de la velocidad en ese instante:</p>
                    $$ v_x(t) = v_{0x} = 555,7 \\, m/s $$
                    $$ v_y(t) = v_{0y} + gt = 575,4 - 9,8(117,45) = 575,4 - 1151 \\approx -575,6 \\, m/s $$
                    <p><strong>Respuesta Final:</strong> A los 117,45 s, el proyectil impacta el suelo. Su velocidad es $\\vec{v} = (555,7\\hat{i} - 575,6\\hat{j}) \\, m/s$.</p>
                </div>
            </div>

            <!-- PREGUNTA 7 -->
            <div class="solved-question-container">
                <h4>7.- Velocidad Relativa (Avioneta) (2 ptos)</h4>
                <p class="enunciado"><strong>Enunciado:</strong> Avioneta vuela al Este. $v_{avion/aire} = 150 \\, km/h$. Viento sopla al Sureste a $45 \\, km/h$. Determine dirección del vuelo y velocidad respecto a tierra.</p>
                <div class="solution-step">
                    <p><strong>Paso 1: Definir vectores.</strong></p>
                    <p>$\\vec{v}_{Tierra} = $ Velocidad del avión respecto a Tierra (nuestra incógnita, debe apuntar al Este: $v_T\\hat{i}$).</p>
                    <p>$\\vec{v}_{aire} = $ Velocidad del viento (Sureste = -45°): $45\\cos(-45^\\circ)\\hat{i} + 45\\sin(-45^\\circ)\\hat{j} \\approx 31,8\\hat{i} - 31,8\\hat{j}$.</p>
                    <p>$\\vec{v}_{avion} = $ Velocidad del avión respecto al aire (la que marca el velocímetro). Su módulo es 150, su dirección $\\theta$ es la incógnita: $150\\cos(\\theta)\\hat{i} + 150\\sin(\\theta)\\hat{j}$.</p>
                </div>
                <div class="solution-step">
                    <p><strong>Paso 2: Usar la ecuación de velocidad relativa.</strong></p>
                    $$ \\vec{v}_{Tierra} = \\vec{v}_{avion} + \\vec{v}_{aire} $$
                    <p>Separamos en componentes:</p>
                    $$ v_T = 150\\cos(\\theta) + 31,8 \\quad \\text{(Ecuación X)} $$
                    $$ 0 = 150\\sin(\\theta) - 31,8 \\quad \\text{(Ecuación Y, porque el destino final no tiene componente Y)} $$
                </div>
                <div class="solution-step">
                    <p><strong>a) Dirección del vuelo:</strong> Despejamos $\\theta$ de la Ecuación Y.</p>
                    $$ 150\\sin(\\theta) = 31,8 \\implies \\sin(\\theta) = \\frac{31,8}{150} \\approx 0,212 $$
                    $$ \\theta = \\arcsin(0,212) \\approx 12,2^\\circ $$
                    <p>El piloto debe apuntar la nariz del avión a 12,2° al Norte del Este.</p>
                </div>
                <div class="solution-step">
                    <p><strong>b) Velocidad respecto a Tierra:</strong> Sustituimos $\\theta$ en la Ecuación X.</p>
                    $$ v_T = 150\\cos(12,2^\\circ) + 31,8 \\approx 150(0,977) + 31,8 = 146,6 + 31,8 = 178,4 \\, km/h $$
                    <p><strong>Respuesta Final:</strong> El piloto debe dirigir el avión a <strong>12,2° al Norte del Este</strong>. La velocidad del avión respecto a tierra será de <strong>178,4 km/h</strong> hacia el Este.</p>
                </div>
            </div>

        </section>
    `
};