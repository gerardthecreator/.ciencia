// js/Fisica/Tercer-parcial/Parcial-Resuelto/structure.js

export const tema = {
 title: "Solución del Tercer Parcial",
 getHTML: () => `
        <section class="topic-section">
            <h2>Enunciado del Parcial</h2>
            <p>A continuación se muestra la imagen del parcial propuesto. La solución detallada se encuentra más abajo.</p>
            <div class="exam-image-container">
                <img src="assets/parcial3.jpg" alt="Imagen del enunciado del tercer parcial" class="exam-image">
            </div>
        </section>

        <section class="topic-section">
            <h2>Solución Paso a Paso</h2>
            <p class="enunciado"><strong>NOTA:</strong> Se usará $g = 9,8 \\, m/s^2$ en todos los cálculos.</p>

            <!-- PREGUNTA 1 -->
            <div class="solved-question-container">
                <h4>1.- Trabajo de una Fuerza Constante (1 pto)</h4>
                <p class="enunciado"><strong>Enunciado:</strong> Un obrero empuja una caja de 60 kg una distancia de 10 m, aplicando una fuerza constante de 150 N en la dirección del movimiento.</p>
                <div class="solution-step">
                    <p><strong>Justificación:</strong> El trabajo realizado por una fuerza constante se define como el producto de la magnitud de la fuerza por la magnitud del desplazamiento, multiplicado por el coseno del ángulo entre ambos. En este caso, la fuerza se aplica "en la dirección del movimiento", lo que significa que el ángulo $\\theta$ es $0^\\circ$.</p>
                    $$ W = F \\cdot d \\cdot \\cos(\\theta) $$
                </div>
                <div class="solution-step">
                    <p><strong>Cálculo:</strong></p>
                    $$ W = (150 \\, N) \\cdot (10 \\, m) \\cdot \\cos(0^\\circ) = 1500 \\cdot 1 = 1500 \\, J $$
                    <p><strong>Respuesta Final:</strong> El trabajo realizado por el obrero es de <strong>1500 Joules</strong>.</p>
                </div>
            </div>

            <!-- PREGUNTA 2 -->
            <div class="solved-question-container">
                <h4>2.- Cambio en la Energía Cinética (1 pto)</h4>
                <p class="enunciado"><strong>Enunciado:</strong> Un automóvil de 1200 kg acelera desde el reposo hasta una velocidad de 20 m/s.</p>
                <div class="solution-step">
                    <p><strong>Justificación:</strong> El cambio en la energía cinética ($\\Delta K$) es la diferencia entre la energía cinética final ($K_f$) y la energía cinética inicial ($K_i$). La energía cinética se calcula con la fórmula $K = \\frac{1}{2}mv^2$.</p>
                </div>
                <div class="solution-step">
                    <p><strong>Cálculo:</strong></p>
                    <p>Energía Cinética Inicial (desde el reposo, $v_i=0$): $K_i = \\frac{1}{2}(1200 \\, kg)(0 \\, m/s)^2 = 0 \\, J$.</p>
                    <p>Energía Cinética Final: $K_f = \\frac{1}{2}(1200 \\, kg)(20 \\, m/s)^2 = 600 \\cdot 400 = 240000 \\, J$.</p>
                    $$ \\Delta K = K_f - K_i = 240000 \\, J - 0 \\, J = 240000 \\, J $$
                    <p><strong>Respuesta Final:</strong> El cambio en la energía cinética es de <strong>240 kJ</strong>.</p>
                </div>
            </div>

            <!-- PREGUNTA 3 -->
            <div class="solved-question-container">
                <h4>3.- Potencia (2 ptos)</h4>
                <p class="enunciado"><strong>Enunciado:</strong> Un ascensor de 10 kW de potencia levanta una masa de 800 kg una distancia de 25 m a velocidad constante.</p>
                <div class="solution-step">
                    <p><strong>Justificación:</strong> La potencia es el trabajo realizado por unidad de tiempo ($P = W/t$). Para levantar la masa a velocidad constante, el motor debe realizar un trabajo igual a la fuerza de gravedad por la altura. La fuerza que debe ejercer es igual al peso de la masa.</p>
                </div>
                <div class="solution-step">
                    <p><strong>Paso 1: Calcular el trabajo realizado.</strong></p>
                    $$ F = mg = (800 \\, kg)(9,8 \\, m/s^2) = 7840 \\, N $$
                    $$ W = F \\cdot d = (7840 \\, N)(25 \\, m) = 196000 \\, J $$
                </div>
                <div class="solution-step">
                    <p><strong>Paso 2: Calcular el tiempo.</strong> Convertimos la potencia a vatios: $10 \\, kW = 10000 \\, W$.</p>
                    $$ P = \\frac{W}{t} \\implies t = \\frac{W}{P} = \\frac{196000 \\, J}{10000 \\, W} = 19,6 \\, s $$
                    <p><strong>Respuesta Final:</strong> El ascensor tardaría <strong>19,6 segundos</strong>.</p>
                </div>
            </div>

            <!-- PREGUNTA 4 -->
            <div class="solved-question-container">
                <h4>4.- Teorema del Trabajo y la Energía (1 pto)</h4>
                <p class="enunciado"><strong>Enunciado:</strong> Si el trabajo neto sobre un objeto es positivo, ¿qué ocurre con su energía cinética?</p>
                <div class="solution-step">
                    <p><strong>Justificación:</strong> El Teorema del Trabajo y la Energía Cinética establece que el trabajo neto realizado sobre un objeto es igual al cambio en su energía cinética: $W_{neto} = \\Delta K = K_f - K_i$.</p>
                    <p>Si $W_{neto}$ es positivo, entonces $K_f - K_i > 0$, lo que implica que $K_f > K_i$.</p>
                    <p><strong>Respuesta Final:</strong> c) <strong>aumenta</strong>. Un trabajo neto positivo significa que la energía cinética final es mayor que la inicial, lo que corresponde a un aumento en la rapidez del objeto.</p>
                </div>
            </div>

            <!-- PREGUNTA 5 -->
            <div class="solved-question-container">
                <h4>5.- Bloque en Plano Inclinado (7 ptos)</h4>
                <p class="enunciado"><strong>Enunciado:</strong> Bloque de 3kg en reposo sube 2m por pendiente de 37° por una fuerza de 40N. $\\mu_k=0.1$. Calcule los trabajos y la velocidad final.</p>
                <div class="solution-step">
                    <p><strong>DCL:</strong> El DCL incluye la Fuerza aplicada ($\\vec{F}$) paralela al plano, el Peso ($\\vec{P}$) vertical hacia abajo, la Normal ($\\vec{N}$) perpendicular al plano y la Fricción ($\\vec{f}_k$) paralela al plano y hacia abajo.</p>
                </div>
                <div class="solution-step">
                    <p><strong>a) Trabajo de la fuerza de 40N:</strong> La fuerza está en la misma dirección que el desplazamiento.</p>
                    $$ W_F = F \\cdot d \\cdot \\cos(0^\\circ) = (40,0 \\, N)(2,00 \\, m) = 80,0 \\, J $$
                </div>
                <div class="solution-step">
                    <p><strong>b) Trabajo de la gravedad:</strong> La gravedad realiza trabajo negativo porque el bloque sube. El cambio de altura es $h = d \\sin(37^\\circ) = 2,00 \\cdot 0,602 \\approx 1,20 \\, m$.</p>
                    $$ W_g = -mgh = -(3,00 \\, kg)(9,8 \\, m/s^2)(1,20 \\, m) = -35,3 \\, J $$
                </div>
                <div class="solution-step">
                    <p><strong>c) Trabajo de la fricción:</strong> Primero calculamos la Normal. $\\sum F_y = N - P_y = 0 \\implies N = mg\\cos(37^\\circ) = 3,00 \\cdot 9,8 \\cdot 0,799 \\approx 23,5 \\, N$.</p>
                    $$ f_k = \\mu_k N = 0,100 \\cdot 23,5 = 2,35 \\, N $$
                    $$ W_{fric} = -f_k d = -(2,35 \\, N)(2,00 \\, m) = -4,70 \\, J $$
                </div>
                <div class="solution-step">
                    <p><strong>d) Velocidad final:</strong> Usamos el Teorema del Trabajo-Energía. $W_{neto} = \\Delta K$.</p>
                    $$ W_{neto} = W_F + W_g + W_{fric} = 80,0 - 35,3 - 4,70 = 40,0 \\, J $$
                    $$ W_{neto} = K_f - K_i = \\frac{1}{2}mv_f^2 - 0 $$
                    $$ 40,0 = \\frac{1}{2}(3,00)v_f^2 \\implies v_f = \\sqrt{\\frac{2 \\cdot 40,0}{3,00}} \\approx 5,16 \\, m/s $$
                </div>
            </div>

            <!-- PREGUNTA 6 -->
            <div class="solved-question-container">
                <h4>6.- Resorte y Rizo (6 ptos)</h4>
                <p class="enunciado"><strong>Enunciado:</strong> Bloque de 2kg impulsado por resorte (k=200 N/m) en una pista sin fricción. Pasa por el punto B (cima del rizo, R=1.5m) con la mínima velocidad posible.</p>
                <div class="solution-step">
                    <p><strong>a) Compresión máxima del resorte (x):</strong></p>
                    <p>La "mínima velocidad posible" en la cima del rizo (punto B) es aquella para la cual la fuerza normal es cero. La única fuerza que provee la aceleración centrípeta es el peso.</p>
                    $$ \\sum F_B = P = ma_c \\implies mg = \\frac{mv_B^2}{R} \\implies v_B = \\sqrt{gR} = \\sqrt{9,8 \\cdot 1,5} \\approx 3,83 \\, m/s $$
                    <p>Ahora usamos la conservación de la energía (derivada del teorema W-K) entre el punto inicial (resorte comprimido) y el punto B. La altura de B es $h_B = 2R = 3,0 \\, m$.</p>
                    $$ E_{inicial} = E_{final} \\implies E_{resorte} = E_{potencial,B} + E_{cinetica,B} $$
                    $$ \\frac{1}{2}kx^2 = mgh_B + \\frac{1}{2}mv_B^2 $$
                    $$ \\frac{1}{2}(200)x^2 = (2)(9,8)(3,0) + \\frac{1}{2}(2)(3,83)^2 $$
                    $$ 100x^2 = 58,8 + 14,7 \\implies 100x^2 = 73,5 \\implies x = \\sqrt{0,735} \\approx 0,857 \\, m $$
                </div>
                <div class="solution-step">
                    <p><strong>b) Fuerza en el punto C:</strong> El punto C está a una altura $h_C = R = 1,5 \\, m$. Primero hallamos la velocidad en C por conservación de energía.</p>
                    $$ E_{inicial} = E_{en C} \\implies 73,5 \\, J = mgh_C + \\frac{1}{2}mv_C^2 $$
                    $$ 73,5 = (2)(9,8)(1,5) + \\frac{1}{2}(2)v_C^2 \\implies 73,5 = 29,4 + v_C^2 \\implies v_C = \\sqrt{44,1} \\approx 6,64 \\, m/s $$
                    <p>En C, la fuerza normal es la única fuerza horizontal y provee la aceleración centrípeta. La dirección es horizontal, hacia el centro del rizo.</p>
                    $$ N_C = ma_c = \\frac{mv_C^2}{R} = \\frac{2 \\cdot (6,64)^2}{1,5} \\approx 58,8 \\, N $$
                </div>
                <div class="solution-step">
                    <p><strong>c) Altura máxima en el plano inclinado:</strong> La energía total se convierte completamente en energía potencial gravitacional.</p>
                    $$ E_{inicial} = E_{plano} \\implies 73,5 \\, J = mgh_{max} $$
                    $$ h_{max} = \\frac{73,5}{mg} = \\frac{73,5}{2 \\cdot 9,8} = 3,75 \\, m $$
                </div>
            </div>

            <!-- PREGUNTA 7 -->
            <div class="solved-question-container">
                <h4>7.- Trabajo desde una Gráfica (2 ptos)</h4>
                <p class="enunciado"><strong>Enunciado:</strong> Calcule el trabajo neto desde x=0m hasta x=5m a partir de la gráfica F vs x.</p>
                <div class="solution-step">
                    <p><strong>Justificación:</strong> El trabajo neto es el área total bajo la curva de la gráfica Fuerza vs. Posición. Las áreas por encima del eje x son trabajo positivo y las áreas por debajo son trabajo negativo.</p>
                </div>
                <div class="solution-step">
                    <p><strong>Cálculo por áreas:</strong></p>
                    <p>Área 1 (Rectángulo de 0 a 2m): $W_1 = base \\times altura = (2 \\, m)(4 \\, N) = 8 \\, J$.</p>
                    <p>Área 2 (Triángulo de 2 a 4m): $W_2 = \\frac{1}{2} \\times base \\times altura = \\frac{1}{2}(2 \\, m)(4 \\, N) = 4 \\, J$.</p>
                    <p>Área 3 (Triángulo de 4 a 5m, negativo): $W_3 = \\frac{1}{2}(1 \\, m)(-2 \\, N) = -1 \\, J$.</p>
                    $$ W_{neto} = W_1 + W_2 + W_3 = 8 + 4 - 1 = 11 \\, J $$
                    <p><strong>Respuesta Final:</strong> El trabajo neto realizado es de <strong>11 Joules</strong>.</p>
                </div>
            </div>

        </section>
    `
};