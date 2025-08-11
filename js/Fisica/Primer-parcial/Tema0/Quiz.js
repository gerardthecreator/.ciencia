// js/Fisica/Primer-parcial/Tema0/Quiz.js

import { showModal } from '../../../ui/modal.js';

// --- Datos para el Auto-Quiz ---
const quizData = [
    {
        id: 'q1',
        question: "Una magnitud que se define completamente con un número y una unidad, como la masa (5 kg), es un:",
        options: { a: "Vector", b: "Escalar", c: "Componente", d: "Vector unitario" },
        correctAnswer: 'b',
        feedback: "Correcto. Los escalares como la masa o el tiempo no tienen dirección. Revisa el <span class='text-highlight'>Ejercicio Resuelto 1</span>."
    },
    {
        id: 'q2',
        question: "Si multiplicas un vector $\\vec{F}$ por el escalar -3, el nuevo vector resultante:",
        options: { a: "Tiene la misma magnitud y sentido", b: "Es tres veces más grande y apunta en sentido opuesto", c: "Es tres veces más pequeño", d: "Es perpendicular al original" },
        correctAnswer: 'b',
        feedback: "El número 3 triplica la magnitud y el signo negativo (-) invierte el sentido. Revisa el <span class='text-highlight'>Ejercicio Resuelto 2</span>."
    },
    {
        id: 'q3',
        question: "Un vector de 10 N forma un ángulo de 60° con el eje X. ¿Cuál es su componente horizontal ($V_x$)?",
        options: { a: "8.66 N", b: "10 N", c: "5 N", d: "7.07 N" },
        correctAnswer: 'c',
        feedback: "La componente horizontal se calcula con el coseno: $V_x = |V| \\cos(\\theta) = 10 \\cdot \\cos(60^\\circ) = 10 \\cdot 0.5 = 5$. Revisa el <span class='text-highlight'>Ejercicio Resuelto 3</span>."
    },
    {
        id: 'q4',
        question: "Un vector tiene componentes $V_x = 3$ y $V_y = 4$. ¿Cuál es la magnitud del vector $|\\vec{V}|$?",
        options: { a: "7", b: "1", c: "25", d: "5" },
        correctAnswer: 'd',
        feedback: "Se usa el Teorema de Pitágoras: $|V| = \\sqrt{V_x^2 + V_y^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$. Revisa el <span class='text-highlight'>Ejercicio Resuelto 4</span>."
    },
    {
        id: 'q5',
        question: "La expresión $\\vec{A} = 5\\hat{i} - 2\\hat{j}$ es la notación de un vector usando:",
        options: { a: "Coordenadas polares", b: "Vectores unitarios", c: "Magnitud y ángulo", d: "Escalares" },
        correctAnswer: 'b',
        feedback: "$\\hat{i}$ y $\\hat{j}$ son los vectores unitarios para las direcciones X e Y, respectivamente. Revisa el <span class='text-highlight'>Ejercicio Resuelto 5</span>."
    },
    {
        id: 'q6',
        question: "Suma los siguientes vectores: $\\vec{A} = (2\\hat{i} + 4\\hat{j})$ y $\\vec{B} = (3\\hat{i} - 1\\hat{j})$.",
        options: { a: "$5\\hat{i} + 5\\hat{j}$", b: "$1\\hat{i} + 3\\hat{j}$", c: "$5\\hat{i} + 3\\hat{j}$", d: "$6\\hat{i} - 4\\hat{j}$" },
        correctAnswer: 'c',
        feedback: "Se suman las componentes por separado: $(2+3)\\hat{i} + (4-1)\\hat{j} = 5\\hat{i} + 3\\hat{j}$. Revisa el <span class='text-highlight'>Ejercicio Resuelto 6</span>."
    },
    {
        id: 'q7',
        question: "Si un vector $\\vec{V}$ no es nulo, ¿cuál es la magnitud de su vector unitario correspondiente $\\hat{u}_V$?",
        options: { a: "Depende de la magnitud de $\\vec{V}$", b: "Cero", c: "Siempre es 1", d: "No se puede saber" },
        correctAnswer: 'c',
        feedback: "Por definición, un vector unitario siempre tiene magnitud 1. Su única función es indicar la dirección. Revisa el <span class='text-highlight'>Ejercicio Resuelto 7</span>."
    }
];

function getSolvedExercisesHTML() {
    return `
    <section class="topic-section">
        <h2>Ejercicios Resueltos</h2>
        <p>Estudia estos ejemplos para afianzar los conceptos. Haz clic en "Ver Solución" para analizar cada paso.</p>

        <div class="solved-exercise">
            <h4>Ejercicio 1: Identificación de Escalares y Vectores</h4>
            <p class="enunciado"><strong>Enunciado:</strong> Clasifica: (a) 15 Joules de energía, (b) una fuerza de 50 N hacia abajo, (c) 3 horas de tiempo.</p>
            <button class="btn btn-solution" data-solution-id="sol-1">Ver Solución</button>
            <div id="sol-1" class="solution-content"><h4>Solución</h4><p>(a) Energía (15 J): Es un <span class="text-highlight">Escalar</span>. No tiene dirección.</p><p>(b) Fuerza (50 N hacia abajo): Es un <span class="text-highlight">Vector</span>. Tiene magnitud (50 N) y dirección/sentido (hacia abajo).</p><p>(c) Tiempo (3 h): Es un <span class="text-highlight">Escalar</span>. No tiene dirección.</p></div>
        </div>

        <div class="solved-exercise">
            <h4>Ejercicio 2: Producto por un Escalar</h4>
            <p class="enunciado"><strong>Enunciado:</strong> Un auto se mueve con una velocidad $\\vec{v}$. ¿Qué representa físicamente el vector $-2\\vec{v}$?</p>
            <button class="btn btn-solution" data-solution-id="sol-2">Ver Solución</button>
            <div id="sol-2" class="solution-content"><h4>Solución</h4><p>El vector $-2\\vec{v}$ representa una velocidad con:</p><ul><li><strong>Magnitud:</strong> El doble de la velocidad original (factor de 2).</li><li><strong>Sentido:</strong> Opuesto al de la velocidad original (signo negativo).</li></ul><p>Físicamente, es un auto que va el doble de rápido pero en la dirección contraria.</p></div>
        </div>

        <div class="solved-exercise">
            <h4>Ejercicio 3: Cálculo de Componentes</h4>
            <p class="enunciado"><strong>Enunciado:</strong> Un avión despega con una velocidad de 150 m/s y un ángulo de 30° sobre la horizontal. Calcula sus componentes $v_x$ y $v_y$.</p>
            <button class="btn btn-solution" data-solution-id="sol-3">Ver Solución</button>
            <div id="sol-3" class="solution-content"><h4>Solución</h4><p>Usamos las fórmulas de componentes con $|\\vec{v}| = 150$ m/s y $\\theta = 30^\\circ$.</p><p>Componente X (horizontal): $v_x = |\\vec{v}| \\cos(\\theta) = 150 \\cdot \\cos(30^\\circ) \\approx 150 \\cdot 0.866 = 129.9 \\, m/s$.</p><p>Componente Y (vertical): $v_y = |\\vec{v}| \\sin(\\theta) = 150 \\cdot \\sin(30^\\circ) = 150 \\cdot 0.5 = 75 \\, m/s$.</p></div>
        </div>

        <div class="solved-exercise">
            <h4>Ejercicio 4: Reconstrucción de un Vector</h4>
            <p class="enunciado"><strong>Enunciado:</strong> Las componentes de un vector desplazamiento son $d_x = -6$ m y $d_y = 8$ m. Encuentra la magnitud $|\\vec{d}|$ y el ángulo $\\theta$ del vector.</p>
            <button class="btn btn-solution" data-solution-id="sol-4">Ver Solución</button>
            <div id="sol-4" class="solution-content"><h4>Solución</h4><p><strong>Magnitud:</strong> Usamos el Teorema de Pitágoras.</p>$$|\\vec{d}| = \\sqrt{d_x^2 + d_y^2} = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\, m$$<p><strong>Ángulo:</strong> Usamos la tangente inversa. Primero, el ángulo de referencia $\\alpha = \\arctan(|d_y/d_x|) = \\arctan(8/6) \\approx 53.1^\\circ$. Como $d_x$ es negativo y $d_y$ es positivo, el vector está en el segundo cuadrante. El ángulo real es $\\theta = 180^\\circ - 53.1^\\circ = 126.9^\\circ$.</p></div>
        </div>

        <div class="solved-exercise">
            <h4>Ejercicio 5: Notación con Vectores Unitarios</h4>
            <p class="enunciado"><strong>Enunciado:</strong> Escribe el vector del ejercicio anterior ($d_x = -6$ m, $d_y = 8$ m) usando la notación de vectores unitarios $\\hat{i}$ y $\\hat{j}$.</p>
            <button class="btn btn-solution" data-solution-id="sol-5">Ver Solución</button>
            <div id="sol-5" class="solution-content"><h4>Solución</h4><p>La notación es $\\vec{d} = d_x\\hat{i} + d_y\\hat{j}$.</p><p>Simplemente sustituimos los valores de las componentes:</p>$$ \\vec{d} = (-6\\hat{i} + 8\\hat{j}) \\, m $$</div>
        </div>

        <div class="solved-exercise">
            <h4>Ejercicio 6: Suma Analítica de Vectores</h4>
            <p class="enunciado"><strong>Enunciado:</strong> Dados $\\vec{A} = (4\\hat{i} + 7\\hat{j})$ y $\\vec{B} = (-2\\hat{i} + 3\\hat{j})$, calcula el vector resultante $\\vec{R} = \\vec{A} + \\vec{B}$.</p>
            <button class="btn btn-solution" data-solution-id="sol-6">Ver Solución</button>
            <div id="sol-6" class="solution-content"><h4>Solución</h4><p>Para sumar vectores, sumamos sus componentes correspondientes por separado.</p><p>Componente X: $R_x = A_x + B_x = 4 + (-2) = 2$.</p><p>Componente Y: $R_y = A_y + B_y = 7 + 3 = 10$.</p><p>El vector resultante es:</p>$$ \\vec{R} = (2\\hat{i} + 10\\hat{j}) $$</div>
        </div>

        <div class="solved-exercise">
            <h4>Ejercicio 7: Encontrar un Vector Unitario</h4>
            <p class="enunciado"><strong>Enunciado:</strong> Encuentra el vector unitario $\\hat{u}$ en la misma dirección que el vector $\\vec{C} = 3\\hat{i} - 4\\hat{j}$.</p>
            <button class="btn btn-solution" data-solution-id="sol-7">Ver Solución</button>
            <div id="sol-7" class="solution-content"><h4>Solución</h4><p><strong>Paso 1:</strong> Calcular la magnitud de $\\vec{C}$.</p>$$|\\vec{C}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$<p><strong>Paso 2:</strong> Dividir el vector original por su magnitud.</p>$$ \\hat{u} = \\frac{\\vec{C}}{|\\vec{C}|} = \\frac{3\\hat{i} - 4\\hat{j}}{5} = \\frac{3}{5}\\hat{i} - \\frac{4}{5}\\hat{j} $$<p>Este es el vector unitario. Su magnitud es 1 y apunta en la misma dirección que $\\vec{C}$.</p></div>
        </div>
    </section>
    `;
}

function getAutoQuizHTML() {
    let questionsHTML = '';
    quizData.forEach(q => {
        questionsHTML += `<div class="quiz-question" id="${q.id}"><p>${q.question}</p><div class="quiz-options"><label><input type="radio" name="${q.id}" value="a"> ${q.options.a}</label><label><input type="radio" name="${q.id}" value="b"> ${q.options.b}</label><label><input type="radio" name="${q.id}" value="c"> ${q.options.c}</label><label><input type="radio" name="${q.id}" value="d"> ${q.options.d}</label></div></div>`;
    });
    return `<section class="auto-quiz-container"><h2>Auto-Quiz Evaluado</h2><p>¡Es hora de poner a prueba tus conocimientos! Tienes 30 minutos para completar el quiz.</p><div class="quiz-timer">Tiempo restante: <span id="timer">30:00</span></div><form id="auto-quiz-form">${questionsHTML}<button type="submit" class="btn">Calificar Quiz</button></form><div id="quiz-results"></div></section>`;
}

export const quiz = {
    getHTML: () => `${getSolvedExercisesHTML()}${getAutoQuizHTML()}`,
    init: () => {
        const solutionButtons = document.querySelectorAll('.btn-solution');
        solutionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const solutionId = button.dataset.solutionId;
                const solutionContent = document.getElementById(solutionId);
                if (solutionContent) {
                    showModal(solutionContent.innerHTML);
                }
            });
        });

        const form = document.getElementById('auto-quiz-form');
        const timerEl = document.getElementById('timer');
        const resultsEl = document.getElementById('quiz-results');
        if (!form || !timerEl || !resultsEl) return;

        let timerInterval;

        function startTimer() {
            let duration = 30 * 60;
            timerInterval = setInterval(() => {
                const minutes = Math.floor(duration / 60);
                let seconds = duration % 60;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                timerEl.textContent = `${minutes}:${seconds}`;
                duration--;
                if (duration < 0) {
                    clearInterval(timerInterval);
                    timerEl.textContent = "¡Tiempo agotado!";
                    form.requestSubmit();
                }
            }, 1000);
        }

        function evaluateQuiz() {
            clearInterval(timerInterval);
            let score = 0;
            let feedbackHTML = '';
            quizData.forEach(q => {
                const userAnswer = form.querySelector(`input[name="${q.id}"]:checked`);
                if (userAnswer) {
                    if (userAnswer.value === q.correctAnswer) {
                        score++;
                        feedbackHTML += `<div class="feedback-item feedback-correct"><p><strong>Pregunta:</strong> ¡Correcto!</p></div>`;
                    } else {
                        feedbackHTML += `<div class="feedback-item feedback-incorrect"><p><strong>Pregunta:</strong> Incorrecto.</p><p><strong>Refuerzo:</strong> ${q.feedback}</p></div>`;
                    }
                } else {
                     feedbackHTML += `<div class="feedback-item feedback-incorrect"><p><strong>Pregunta:</strong> No respondida.</p><p><strong>Refuerzo:</strong> ${q.feedback}</p></div>`;
                }
            });
            const percentage = Math.round((score / quizData.length) * 100);
            const summaryHTML = `<div class="results-summary">Tu puntaje es: ${percentage}% (${score} de ${quizData.length} correctas)</div>`;
            resultsEl.innerHTML = summaryHTML + feedbackHTML;
            form.querySelectorAll('input, button').forEach(el => el.disabled = true);
            MathJax.typesetPromise([resultsEl]);
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            evaluateQuiz();
            resultsEl.scrollIntoView({ behavior: 'smooth' });
        });

        startTimer();
    }
};