// js/Quimica/Primer-parcial/Tema2/Teoria.js

export const teoria = {
 video: 'g3uP80N0o_U', // Video sobre Leyes Ponderales y Teoría Atómica
 getHTML: () => `
        <section class="topic-section">
            <h2>1. Surgimiento de la Teoría Atómica</h2>
            <p>
                La idea de que la materia está compuesta por partículas indivisibles (átomos) fue propuesta por los antiguos griegos, pero no fue hasta el siglo XIX que se convirtió en una teoría científica gracias al trabajo de John Dalton, basado en evidencia experimental.
            </p>
            <h4>Leyes Ponderales de la Química</h4>
            <p>Estas leyes, que rigen las masas en las reacciones químicas, fueron la base de la teoría de Dalton:</p>
            <ul>
                <li><strong class="text-concept">Ley de Conservación de la Masa (Lavoisier):</strong> La materia no se crea ni se destruye, solo se transforma. La masa total de los reactivos es igual a la masa total de los productos.</li>
                <li><strong class="text-concept">Ley de las Proporciones Definidas (Proust):</strong> Un compuesto puro siempre contiene los mismos elementos en la misma proporción de masa. (Ej: El agua, $\\ce{H2O}$, siempre es 88.8% oxígeno y 11.2% hidrógeno por masa).</li>
                <li><strong class="text-concept">Ley de las Proporciones Múltiples (Dalton):</strong> Si dos elementos forman más de un compuesto (ej. CO y CO₂), la relación de las masas del segundo elemento que se combina con una masa fija del primer elemento es una relación de números enteros sencillos.</li>
            </ul>
        </section>

        <section class="topic-section">
            <h2>2. Los Elementos Químicos</h2>
            <p>Un elemento es una sustancia que no puede descomponerse en otras más simples por medios químicos. Cada elemento está formado por un solo tipo de átomo.</p>
            <ul>
                <li><strong class="text-concept">Isótopos:</strong> Átomos del mismo elemento (mismo número de protones, Z) pero con diferente número de neutrones, y por tanto, diferente número másico (A). Ejemplo: Carbono-12 ($\\ce{^{12}_6C}$) y Carbono-14 ($\\ce{^{14}_6C}$).</li>
                <li><strong class="text-concept">Iones:</strong> Átomos o grupos de átomos con una carga eléctrica neta. Si un átomo pierde electrones, se convierte en un <strong>catión</strong> (carga positiva, ej. $\\ce{Na+}$). Si gana electrones, se convierte en un <strong>anión</strong> (carga negativa, ej. $\\ce{Cl-}$).</li>
                <li><strong class="text-concept">Moléculas:</strong> Un agregado de al menos dos átomos en una disposición definida que se mantienen unidos por enlaces químicos. Ejemplo: Una molécula de agua ($\\ce{H2O}$).</li>
            </ul>
        </section>

        <section class="topic-section">
            <h2>3. Introducción a la Tabla Periódica</h2>
            <p>
                Es una tabla que organiza los elementos según su número atómico creciente. Las columnas se llaman <span class="text-highlight">grupos</span> y las filas <span class="text-highlight">períodos</span>. Los elementos en el mismo grupo tienen propiedades químicas similares debido a que tienen configuraciones electrónicas de valencia parecidas.
            </p>
            <h4>Tipos de Elementos</h4>
            <ul>
                <li><strong>Metales:</strong> Ubicados a la izquierda y centro de la tabla. Son buenos conductores de calor y electricidad, maleables, dúctiles y suelen perder electrones para formar cationes.</li>
                <li><strong>No Metales:</strong> Ubicados en la esquina superior derecha. Son malos conductores, quebradizos en estado sólido y suelen ganar electrones para formar aniones.</li>
                <li><strong>Metaloides:</strong> Se encuentran en la escalera diagonal que separa metales y no metales. Tienen propiedades intermedias.</li>
            </ul>
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