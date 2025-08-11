// js/Fisica/Segundo-parcial/Tema3/Teoria.js

export const teoria = {
 video: 'iAg_p1_wS_A', // Video sobre Leyes de Newton y DCL
 getHTML: () => `
        <section class="topic-section">
            <h2>Lección 1: El Estado Natural de las Cosas (1ª Ley de Newton)</h2>
            <p>
                La <strong class="text-concept">Primera Ley de Newton</strong>, o Ley de la Inercia, rompe con la intuición antigua. El estado natural de un objeto no es el reposo, sino el movimiento a velocidad constante (MRU). Un objeto solo cambia su estado de movimiento si una <span class="text-highlight">fuerza externa neta</span> actúa sobre él.
            </p>
            <ul>
                <li><strong>Fuerza ($\\vec{F}$):</strong> Un empujón o un tirón. Es un vector.</li>
                <li><strong>Masa ($m$):</strong> La medida de la inercia de un objeto, su resistencia a cambiar de movimiento. Es un escalar.</li>
            </ul>
            <h4>El Diagrama de Cuerpo Libre (DCL) en Equilibrio</h4>
            <p>Para un objeto en equilibrio (en reposo o en MRU), la suma de todas las fuerzas debe ser cero. $\\sum \\vec{F} = 0$.</p>
            <p><strong>Ejemplo:</strong> Un libro sobre una mesa. Las fuerzas son el <strong>Peso</strong> ($\\vec{P}$), que la Tierra ejerce hacia abajo, y la <strong>Fuerza Normal</strong> ($\\vec{N}$), que la mesa ejerce hacia arriba. En el DCL, estas dos fuerzas se cancelan: $N - P = 0$.</p>
        </section>

        <section class="topic-section">
            <h2>Lección 2: La Causa y el Efecto (2ª Ley de Newton)</h2>
            <p>
                Si las fuerzas no se cancelan, el objeto acelera. La <strong class="text-concept">Segunda Ley de Newton</strong> nos da la relación exacta entre la causa (fuerza neta) y el efecto (aceleración).
            </p>
            <p class="text-highlight">La suma vectorial de todas las fuerzas que actúan sobre un objeto es igual al producto de su masa por su aceleración.</p>
            $$ \\sum \\vec{F} = m \\cdot \\vec{a} $$
            <p>El vector fuerza neta y el vector aceleración siempre apuntan en la misma dirección.</p>
            <h4>Tipos de Fuerzas Comunes</h4>
            <ul>
                <li><strong>Peso ($\\vec{P}$):</strong> Fuerza de la gravedad. $P = mg$. Siempre apunta hacia el centro del planeta.</li>
                <li><strong>Normal ($\\vec{N}$):</strong> Fuerza de contacto de una superficie, siempre perpendicular a ella.</li>
                <li><strong>Tensión ($\\vec{T}$):</strong> Fuerza ejercida por una cuerda, siempre "tira" a lo largo de la cuerda.</li>
                <li><strong>Fricción ($\\vec{f}$):</strong> Fuerza que se opone al movimiento entre superficies, paralela a la superficie.</li>
            </ul>
        </section>

        <section class="topic-section">
            <h2>Lección 3: No Hay Acciones Solitarias (3ª Ley de Newton)</h2>
            <p>
                La <strong class="text-concept">Tercera Ley de Newton</strong> establece que las fuerzas siempre vienen en pares. Si un objeto A ejerce una fuerza sobre un objeto B, entonces B ejerce una fuerza de igual magnitud y sentido opuesto sobre A.
            </p>
            $$ \\vec{F}_{AB} = -\\vec{F}_{BA} $$
            <p class="text-highlight">
                <strong>¡El error más común!</strong> El par acción-reacción NUNCA actúa sobre el mismo objeto. Por ejemplo, la "acción" es la Tierra tirando de un libro (el peso del libro), y la "reacción" es el libro tirando de la Tierra. No se pueden cancelar porque actúan en cuerpos diferentes.
            </p>
        </section>

        <section class="topic-section">
            <h2>El Método Maestro para Resolver Problemas con DCL</h2>
            <ol>
                <li><strong>Aislar y Dibujar:</strong> Haz un DCL para cada objeto de interés, dibujando TODAS las fuerzas que actúan SOBRE él.</li>
                <li><strong>Elegir Coordenadas:</strong> Elige un sistema de ejes, usualmente alineando el eje X con la dirección de la aceleración.</li>
                <li><strong>Descomponer Fuerzas:</strong> Descompón cualquier fuerza inclinada en sus componentes X e Y.</li>
                <li><strong>Aplicar 2ª Ley por Eje:</strong> Escribe las ecuaciones $\\sum F_x = ma_x$ y $\\sum F_y = ma_y$.</li>
                <li><strong>Resolver el Sistema:</strong> Resuelve el sistema de ecuaciones algebraicas para encontrar las incógnitas.</li>
            </ol>
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