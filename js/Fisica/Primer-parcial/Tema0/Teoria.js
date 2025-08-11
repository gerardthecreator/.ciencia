// js/Fisica/Primer-parcial/Tema0/Teoria.js

export const teoria = {
    // ***** ID DEL VIDEO ACTUALIZADO *****
    video: 'tXua8kriBNI',
    
    getHTML: () => `
        <section class="topic-section">
            <h2>Lección 1: ¿Cuánto hay? - La Base de Todo</h2>
            <p>
                Un <strong class="text-concept">escalar</strong> es una magnitud que queda totalmente definida por su valor numérico y su unidad. No necesita dirección.
                <br><span class="text-highlight">Ejemplos:</span> Masa (kg), tiempo (s), temperatura (°C).
            </p>
        </section>

        <section class="topic-section">
            <h2>Lección 2: "Cuánto" y "Hacia Dónde" - Nace el Vector</h2>
            <p>
                Un <strong class="text-concept">vector</strong> es una herramienta matemática para describir magnitudes que tienen <span class="text-highlight">módulo</span> (cuánto) y <span class="text-highlight">dirección y sentido</span> (hacia dónde). Se representa con una flecha ($\\vec{v}$).
            </p>
            <h4>Producto de un Vector por un Escalar</h4>
            <p>
                Multiplicar un vector $\\vec{A}$ por un escalar $k$ cambia su magnitud y/o sentido.
            </p>
            <div class="canvas-visualization">
                <canvas id="canvas-scalar-product" width="400" height="150"></canvas>
            </div>
        </section>

        <section class="topic-section">
            <h2>Lección 3: Anatomía de un Vector - El Poder de las Componentes</h2>
            <p>
                Las <strong class="text-concept">componentes de un vector</strong> son sus proyecciones sobre los ejes X e Y. Para un vector $\\vec{V}$ con ángulo $\\theta$:
            </p>
            $$ V_x = |\\vec{V}| \\cos(\\theta) \\quad , \\quad V_y = |\\vec{V}| \\sin(\\theta) $$
            <div class="canvas-visualization">
                <canvas id="canvas-components" width="300" height="250"></canvas>
            </div>
        </section>

        <section class="topic-section">
            <h2>Lección 4: El ADN de la Dirección - Vectores Unitarios</h2>
            <p>
                Un <strong class="text-concept">vector unitario</strong> tiene módulo 1 y solo indica una dirección. Los más importantes son $\\hat{i}$ (dirección X) y $\\hat{j}$ (dirección Y).
            </p>
            $$ \\vec{V} = V_x \\hat{i} + V_y \\hat{j} $$
            <div class="canvas-visualization">
                <canvas id="canvas-unit-vectors" width="250" height="200"></canvas>
            </div>
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