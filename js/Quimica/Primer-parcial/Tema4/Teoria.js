// js/Quimica/Primer-parcial/Tema4/Teoria.js
export const teoria = {
 video: 'LRV_kY_p4-M', // Video sobre Propiedades Periódicas
 getHTML: () => `
        <section class="topic-section">
            <h2>1. Formas de Dividir la Tabla Periódica</h2>
            <p>La Tabla Periódica no solo se organiza en grupos y períodos, sino también en bloques que corresponden al último orbital que se está llenando en la configuración electrónica.</p>
            <ul>
                <li><strong class="text-concept">Elementos del bloque s:</strong> Grupos 1 (alcalinos) y 2 (alcalinotérreos).</li>
                <li><strong class="text-concept">Elementos del bloque p:</strong> Grupos 13 a 18. Incluyen no metales, metaloides y algunos metales.</li>
                <li><strong class="text-concept">Elementos del bloque d:</strong> Grupos 3 a 12. Son los metales de transición.</li>
                <li><strong class="text-concept">Elementos del bloque f:</strong> Lantánidos y actínidos.</li>
            </ul>
        </section>
        <section class="topic-section">
            <h2>2. Moléculas e Iones</h2>
            <p>La posición de los elementos en la tabla nos ayuda a predecir el tipo de compuesto que formarán.</p>
            <ul>
                <li><strong class="text-concept">Compuestos Moleculares:</strong> Se forman típicamente entre dos <strong>no metales</strong> (cercanos en la tabla). Comparten electrones para formar enlaces covalentes. Ejemplo: Dióxido de Carbono ($\\ce{CO2}$).</li>
                <li><strong class="text-concept">Compuestos Iónicos:</strong> Se forman típicamente entre un <strong>metal</strong> y un <strong>no metal</strong> (lejanos en la tabla). Hay una transferencia de electrones del metal (que forma un catión) al no metal (que forma un anión), y se mantienen unidos por atracción electrostática. Ejemplo: Cloruro de Sodio ($\\ce{NaCl}$).</li>
            </ul>
        </section>
        <section class="topic-section">
            <h2>3. Propiedades Periódicas y sus Tendencias</h2>
            <p>Son propiedades de los elementos que varían de manera predecible a lo largo de la tabla periódica. Visualizar estas tendencias es clave.</p>
            <div class="canvas-visualization">
                <canvas id="canvas-periodic-trends" width="500" height="300"></canvas>
            </div>
            <ul>
                <li><strong class="text-concept">Radio Atómico:</strong> La mitad de la distancia entre dos núcleos de un mismo elemento unidos entre sí. <span class="text-highlight">Aumenta hacia abajo y hacia la izquierda.</span></li>
                <li><strong class="text-concept">Energía de Ionización:</strong> La energía mínima requerida para arrancar un electrón de un átomo en estado gaseoso. <span class="text-highlight">Aumenta hacia arriba y hacia la derecha.</span></li>
                <li><strong class="text-concept">Afinidad Electrónica:</strong> El cambio de energía que ocurre cuando un átomo acepta un electrón. Se vuelve más exotérmica (más negativa/favorable) <span class="text-highlight">hacia arriba y hacia la derecha.</span></li>
                <li><strong class="text-concept">Electronegatividad:</strong> La capacidad de un átomo para atraer hacia sí los electrones de un enlace químico. <span class="text-highlight">Aumenta hacia arriba y hacia la derecha.</span> No es una propiedad de un átomo aislado.</li>
            </ul>
        </section>
        <section class="topic-section">
            <h2>Video Explicativo</h2>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/${teoria.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    `
};