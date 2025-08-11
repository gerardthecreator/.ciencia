// js/Quimica/Primer-parcial/Tema1/Teoria.js
export const teoria = {
 video: 'h3ppoY_402w',
 getHTML: () => `
        <section class="topic-section">
            <h2>1. El Alcance de la Química</h2>
            <p>La química es la ciencia que estudia la materia, sus propiedades, su composición, su estructura y los cambios que experimenta. Desde la comida que comemos hasta el aire que respiramos, todo es química.</p>
            <p>Históricamente, la química evolucionó desde la alquimia, buscando transformar la materia, hasta convertirse en una ciencia rigurosa basada en la experimentación y la medición.</p>
        </section>
        <section class="topic-section">
            <h2>2. El Método Científico</h2>
            <p>Es el proceso sistemático que los científicos usan para investigar el mundo. Sus pasos principales son:</p>
            <ol>
                <li><strong>Observación:</strong> Recopilar datos y observar un fenómeno.</li>
                <li><strong>Hipótesis:</strong> Proponer una explicación tentativa para la observación.</li>
                <li><strong>Experimentación:</strong> Diseñar y realizar experimentos para probar la hipótesis.</li>
                <li><strong>Teoría/Ley:</strong> Si una hipótesis sobrevive a muchas pruebas, puede convertirse en una teoría (una explicación unificadora) o una ley (un enunciado conciso de una relación).</p>
            </ol>
        </section>
        <section class="topic-section">
            <h2>3. Propiedades y Clasificación de la Materia</h2>
            <p>La materia es cualquier cosa que ocupa espacio y tiene masa. Se clasifica en:</p>
            <ul>
                <li><strong class="text-concept">Sustancias Puras:</strong> Composición fija (ej. agua $\\ce{H2O}$, sal $\\ce{NaCl}$). Pueden ser elementos o compuestos.</li>
                <li><strong class="text-concept">Mezclas:</strong> Combinación de dos o más sustancias (ej. aire, agua salada). Pueden ser homogéneas (composición uniforme) o heterogéneas (composición no uniforme).</li>
            </ul>
            <p>Las propiedades pueden ser <span class="text-highlight">físicas</span> (observables sin cambiar la identidad de la sustancia, como el punto de ebullición) o <span class="text-highlight">químicas</span> (describen cómo una sustancia se transforma en otra, como la capacidad de oxidarse).</p>
        </section>
        <section class="topic-section">
            <h2>4. Magnitudes y Unidades</h2>
            <p>Las mediciones en química requieren unidades. El Sistema Internacional (SI) es el estándar. Algunas unidades base son:</p>
            <ul>
                <li>Masa: kilogramo (kg), aunque en el laboratorio se usa más el gramo (g).</li>
                <li>Longitud: metro (m).</li>
                <li>Volumen: metro cúbico (m³), aunque se usa más el Litro (L) y el mililitro (mL). $1 \\, mL = 1 \\, cm^3$.</li>
                <li>Temperatura: Kelvin (K), aunque se usa comúnmente el grado Celsius (°C). $K = ^\\circ C + 273.15$.</li>
            </ul>
            <h4>Cifras Significativas y Factores de Conversión</h4>
            <p>Las <strong class="text-concept">cifras significativas</strong> son los dígitos en una medición que se conocen con certeza, más un último dígito que es estimado. Es crucial usarlas correctamente para no expresar una precisión mayor de la que realmente se tiene.</p>
            <p>Los <strong class="text-concept">factores de conversión</strong> son fracciones donde el numerador y el denominador son la misma cantidad expresada en unidades diferentes (ej. $\\frac{1000 \\, m}{1 \\, km}$), y se usan para cambiar de una unidad a otra.</p>
        </section>
        <section class="topic-section">
            <h2>Video Explicativo</h2>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/${teoria.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    `
};