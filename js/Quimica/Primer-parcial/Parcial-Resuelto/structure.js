// js/Quimica/Primer-parcial/Parcial-Resuelto/structure.js

export const tema = {
 title: "Solución del Primer Parcial de Química",
 getHTML: () => `
        <section class="topic-section">
            <h2>Enunciado del Parcial</h2>
            <p>A continuación se muestran las imágenes del parcial propuesto. La solución detallada se encuentra más abajo.</p>
            <div class="exam-image-container">
                <img src="assets/parcial-quimica-1.jpg" alt="Imagen del enunciado del primer parcial de química - página 1" class="exam-image">
                <img src="assets/parcial-quimica-2.jpg" alt="Imagen del enunciado del primer parcial de química - página 2" class="exam-image">
            </div>
        </section>

        <section class="topic-section">
            <h2>Solución Paso a Paso</h2>
            
            <!-- PARTE I: SELECCIÓN SIMPLE -->
            <div class="solved-question-container">
                <h4>Parte I: Selección Simple</h4>
                
                <div class="solution-step">
                    <p><strong>1. Configuración Electrónica en Estado Fundamental:</strong></p>
                    <p><strong>Porqué:</strong> El estado fundamental sigue el Principio de Aufbau, llenando los orbitales en orden de energía creciente ($1s, 2s, 2p, 3s, 3p, ...$). Las opciones $3s^1$ y $3p^1$ antes de llenar $2p$ violan esta regla. $2p^5$ es una configuración válida, pero la pregunta podría referirse a un átomo específico. $1s^22s^22p^3$ es la configuración fundamental del Nitrógeno (Z=7).</p>
                    <p><strong>Respuesta:</strong> $1s^22s^22p^3$</p>
                </div>
                
                <div class="solution-step">
                    <p><strong>2. Diagrama de Orbitales No Permitido:</strong></p>
                    <p><strong>Porqué:</strong> Se deben seguir la Regla de Hund (máximo desapareamiento) y el Principio de Exclusión de Pauli (no dos electrones con el mismo espín en un orbital). Un diagrama que viole alguna de estas reglas no está permitido.</p>
                    <p><strong>Respuesta:</strong> (Opción 3).</p>
                </div>

                <div class="solution-step">
                    <p><strong>3. Densidad del Líquido Desconocido:</strong></p>
                    <p><strong>Paso 1 (Hallar volumen del matraz):</strong> $m_{agua} = 63,1769 g - 38,1346 g = 25,0423 g$. Como $d_{agua}=1,000 g/mL$, el volumen es $V = m/d = 25,0423 mL$.</p>
                    <p><strong>Paso 2 (Hallar masa del líquido):</strong> $m_{liq} = 75,5778 g - 38,1346 g = 37,4432 g$.</p>
                    <p><strong>Paso 3 (Hallar densidad del líquido):</strong> $d_{liq} = m_{liq} / V = 37,4432 g / 25,0423 mL \\approx 1,495 g/mL$.</p>
                    <p><strong>Respuesta:</strong> $1,495$</p>
                </div>

                <div class="solution-step">
                    <p><strong>4. Volumen de la Solución de Glucosa:</strong></p>
                    <p><strong>Porqué:</strong> La densidad es la relación entre masa y volumen ($d=m/V$). Si conocemos la masa y la densidad, podemos despejar el volumen.</p>
                    <p><strong>Cálculo:</strong> $V = m/d = 115 g / 1,23 g/cm^3 \\approx 93,5 cm^3$.</p>
                    <p><strong>Respuesta:</strong> $93,5$</p>
                </div>

                 <div class="solution-step">
                    <p><strong>5. Identificación de Anión:</strong></p>
                    <p><strong>Porqué:</strong> Un anión es un átomo que ha ganado electrones. La configuración $...3p^5$ tiene $2+2+6+2+5=17$ electrones. Esto corresponde al átomo neutro de Cloro (Cl, Z=17). Si un elemento formara un anión con esta configuración, significaría que *ganó* electrones para llegar a 17. Por ejemplo, el Azufre (S, Z=16) ganaría un electrón para ser $S^-$, pero el anión estable es $S^{2-}$. La pregunta está formulada de manera confusa. Si se interpreta como "¿Cuál de estos iones tiene esta configuración?", la respuesta sería el átomo neutro de Cloro, no un anión de la lista. Si se asume un error en la pregunta y debería ser $...3p^6$, entonces la respuesta sería $Cl^-$ o $S^{2-}$. Dada la ambigüedad, la pregunta es impugnable, pero la intención más probable es que se refiera al átomo neutro de Cloro.</p>
                    <p><strong>Respuesta (con la interpretación más probable):</strong> Ninguna de las opciones de aniones es correcta. La configuración es la del átomo neutro de Cloro. Si la configuración fuera $...3p^6$, la respuesta sería $Cl^-$ o $S^{2-}$.</p>
                </div>
            </div>

            <!-- PARTE II: COMPLETACIÓN -->
            <div class="solved-question-container">
                <h4>Parte II: Completación</h4>
                <p>1. Cuando aumenta la energía de un fotón, la longitud de onda <strong>disminuye</strong> (son inversamente proporcionales, $E=hc/\\lambda$).</p>
                <p>2. El diagrama orbital (requiere imagen) viola el Principio de <strong>Aufbau / Construcción</strong> (si un nivel superior se llena antes que uno inferior) o la <strong>Regla de Hund</strong> (si los electrones se aparean antes de llenar todos los orbitales del subnivel).</p>
                <p>3. Para el último electrón en $3s^2$: $n=3$, $l=0$ (orbital s), $m_l=0$, $m_s=-1/2$ (el segundo electrón en el orbital).</p>
                <p>4. La fuerza de atracción que ejerce el núcleo... se conoce como: <strong>Carga nuclear efectiva ($Z_{efectiva}$)</strong>.</p>
            </div>

            <!-- PARTE III: DESARROLLO -->
            <div class="solved-question-container">
                <h4>Parte III: Desarrollo</h4>
                
                <div class="solution-step">
                    <p><strong>1. Longitud de Onda para excitar un electrón:</strong></p>
                    <p><strong>Porqué:</strong> Para excitar un electrón "al infinito" se necesita suministrar una energía igual a su energía de enlace, pero con signo positivo. Esta energía es provista por un fotón, y la energía de un fotón se relaciona con su longitud de onda mediante la ecuación de Planck-Einstein $E = hc/\\lambda$.</p>
                    <p><strong>Paso 1 (Convertir Energía):</strong> $E = 2,92 \\times 10^{-18} \\, kJ \\times \\frac{1000 \\, J}{1 \\, kJ} = 2,92 \\times 10^{-15} \\, J$.</p>
                    <p><strong>Paso 2 (Despejar y Calcular $\\lambda$):</strong> $\\lambda = \\frac{hc}{E} = \\frac{(6,626 \\times 10^{-34} J \\cdot s)(3 \\times 10^8 m/s)}{2,92 \\times 10^{-15} J} \\approx 6,81 \\times 10^{-11} \\, m$.</p>
                </div>

                <div class="solution-step">
                    <p><strong>2. Ordenar por Radio Iónico: $Mg^{2+}$, $S^{2-}$, $Cl^-$</strong></p>
                    <p><strong>Justificación:</strong> Los tres iones son isoelectrónicos, es decir, todos tienen 18 electrones (configuración del Argón). En especies isoelectrónicas, el radio iónico disminuye a medida que aumenta el número de protones (Z), ya que la misma cantidad de electrones es atraída con más fuerza por un núcleo más positivo.</p>
                    <p><strong>Análisis:</strong> $Mg$ (Z=12), $S$ (Z=16), $Cl$ (Z=17). Por tanto, el núcleo de $Mg^{2+}$ atrae con menos fuerza que el de $S^{2-}$, y este menos que el de $Cl^-$. No, al revés. $Mg^{2+}$ tiene 12 protones para 10 electrones (Error en el enunciado, Mg2+ tiene 10e). Asumamos $Ar$. $S^{2-}$ (16p), $Cl^-$ (17p), $Ar$ (18p). A más protones para la misma nube electrónica, menor el radio.</p>
                    <p><strong>Respuesta (corregida):</strong> $S^{2-}$ es el más grande (16p para 18e), seguido por $Cl^-$ (17p para 18e). $Mg^{2+}$ (12p para 10e) no es isoelectrónico. Comparando $S^{2-}$ y $Cl^-$, el orden creciente es $Cl^- < S^{2-}$.</p>
                </div>

                <div class="solution-step">
                    <p><strong>3. Ordenar por Energía de Ionización (decreciente): Na, Ca, Ar</strong></p>
                    <p><strong>Justificación:</strong> La primera energía de ionización ($EI_1$) aumenta hacia arriba y hacia la derecha en la tabla periódica.</p>
                    <p><strong>Análisis:</strong> Argón (Ar) es un gas noble en la esquina superior derecha, por lo que tendrá la $EI_1$ más alta. Calcio (Ca) es un metal alcalinotérreo en el período 4. Sodio (Na) es un metal alcalino en el período 3. Aunque Ca está más a la derecha que Na, está un período más abajo. La tendencia dominante es la del grupo (gas noble vs metales) y luego el período.</p>
                    <p><strong>Respuesta (decreciente):</strong> $Ar > Ca > Na$.</p>
                </div>

                <div class="solution-step">
                    <p><strong>4. Abundancias Isotópicas de la Plata:</strong></p>
                    <p><strong>Porqué:</strong> La masa atómica promedio es un promedio ponderado de las masas de sus isótopos. Si llamamos $x$ a la abundancia fraccional de $^{107}Ag$, entonces la abundancia de $^{109}Ag$ será $(1-x)$.</p>
                    <p><strong>Ecuación:</strong> $108,19 = (x \\cdot 106,905090) + ((1-x) \\cdot 108,904760)$.</p>
                    <p><strong>Cálculo:</strong> $108,19 = 106,905090x + 108,904760 - 108,904760x$.</p>
                    <p>$108,19 - 108,904760 = (106,905090 - 108,904760)x$.</p><p>$-0,71476 = -1,99967x \\implies x = \\frac{-0,71476}{-1,99967} \\approx 0,3574$.</p>
                    <p><strong>Respuesta:</strong> Abundancia de $^{107}Ag = x \\approx 35,74\\%$. Abundancia de $^{109}Ag = 1-x \\approx 64,26\\%$.</p>
                </div>
            </div>
        </section>
    `
};