// js/Fisica/Primer-parcial/Tema1/Quiz.js

import { showModal } from '../../../ui/modal.js';

// --- Datos para el Auto-Quiz ---
const quizData = [
    {
        id: 'q1',
        question: "Un objeto en MRU recorre 100 metros en 20 segundos. ¿Cuál es su velocidad?",
        options: { a: "2 m/s", b: "10 m/s", c: "5 m/s", d: "No se puede saber sin la aceleración" },
        correctAnswer: 'c',
        feedback: "Recuerda la fórmula del MRU: $v = d/t$. La velocidad es constante. Revisa el <span class='text-highlight'>Ejercicio Resuelto 1</span>."
    },
    {
        id: 'q2',
        question: "Si un coche frena desde 20 m/s hasta detenerse en 4 segundos, ¿cuál es su aceleración (constante)?",
        options: { a: "5 m/s²", b: "-5 m/s²", c: "2 m/s²", d: "-2 m/s²" },
        correctAnswer: 'b',
        feedback: "Usa la fórmula $v_f = v_i + a \\cdot t$. Despeja 'a'. El signo negativo indica que es una desaceleración. Revisa el <span class='text-highlight'>Ejercicio Resuelto 3</span>."
    },
    {
        id: 'q3',
        question: "En una caída libre (sin resistencia del aire), la aceleración del objeto...",
        options: { a: "Aumenta a medida que cae", b: "Disminuye a medida que cae", c: "Es cero", d: "Es constante (aproximadamente 9.8 m/s²)" },
        correctAnswer: 'd',
        feedback: "La característica principal de la caída libre es que la única aceleración es la de la gravedad (g), que se considera constante. Revisa el <span class='text-highlight'>Ejercicio Resuelto 5</span>."
    },
    {
        id: 'q4',
        question: "La gráfica de posición vs. tiempo (x-t) para un MRUV es una...",
        options: { a: "Línea recta horizontal", b: "Línea recta con pendiente", c: "Parábola", d: "Hipérbola" },
        correctAnswer: 'c',
        feedback: "La posición en un MRUV depende del tiempo al cuadrado ($t^2$), lo que genera una gráfica parabólica. Revisa el <span class='text-highlight'>Ejercicio Resuelto 2</span>."
    }
];

// --- HTML para los componentes del Quiz ---

function getSolvedExercisesHTML() {
    return `
    <section class="topic-section">
        <h2>Ejercicios Resueltos</h2>
        <p>Estudia estos ejemplos para afianzar los conceptos. Haz clic en "Ver Solución" para analizar cada paso.</p>
        <div class="solved-exercise">
            <h4>Ejercicio Resuelto 1: MRU Básico</h4>
            <p class="enunciado"><strong>Enunciado:</strong> Un ciclista se mueve con velocidad constante de 15 m/s durante 2 minutos. ¿Qué distancia recorre?</p>
            <button class="btn btn-solution" data-solution-id="sol-1">Ver Solución</button>
            <div id="sol-1" class="solution-content"><h4>Solución: MRU Básico</h4><p><strong>Paso 1:</strong> Identificar datos y unidades. $v = 15 \\, m/s$. El tiempo $t = 2 \\, \\text{minutos}$. Debemos convertir el tiempo a segundos: $t = 2 \\, \\text{min} \\times \\frac{60 \\, s}{1 \\, \\text{min}} = 120 \\, s$.</p><p><strong>Paso 2:</strong> Usar la fórmula del MRU. $x = v \\cdot t$.</p><p><strong>Paso 3:</strong> Sustituir y calcular. $x = (15 \\, m/s) \\cdot (120 \\, s) = 1800 \\, m$.</p><p><strong>Respuesta:</strong> El ciclista recorre 1800 metros, o 1.8 km.</p></div>
        </div>
        <div class="solved-exercise">
            <h4>Ejercicio Resuelto 2: MRUV desde el Reposo</h4>
            <p class="enunciado"><strong>Enunciado:</strong> Un coche parte del reposo y acelera uniformemente a $2 \\, m/s^2$ durante 5 segundos. ¿Qué distancia recorre?</p>
            <button class="btn btn-solution" data-solution-id="sol-2">Ver Solución</button>
            <div id="sol-2" class="solution-content"><h4>Solución: MRUV desde el Reposo</h4><p><strong>Paso 1:</strong> Datos. $v_i = 0 \\, m/s$ (parte del reposo), $a = 2 \\, m/s^2$, $t = 5 \\, s$.</p><p><strong>Paso 2:</strong> Elegir la ecuación correcta. La de posición en MRUV es perfecta: $\\Delta x = v_i t + \\frac{1}{2} a t^2$.</p><p><strong>Paso 3:</strong> Sustituir. Como $v_i = 0$, el primer término se anula. $\\Delta x = \\frac{1}{2} (2 \\, m/s^2) (5 \\, s)^2 = \\frac{1}{2} (2) (25) \\, m$.</p><p><strong>Respuesta:</strong> El coche recorre 25 metros.</p></div>
        </div>
        <div class="solved-exercise">
            <h4>Ejercicio Resuelto 3: Frenado (MRUV)</h4>
            <p class="enunciado"><strong>Enunciado:</strong> Un tren que viaja a 30 m/s aplica los frenos y se detiene en 15 segundos. Calcula su aceleración (de frenado).</p>
            <button class="btn btn-solution" data-solution-id="sol-3">Ver Solución</button>
            <div id="sol-3" class="solution-content"><h4>Solución: Frenado (MRUV)</h4><p><strong>Paso 1:</strong> Datos. $v_i = 30 \\, m/s$, $v_f = 0 \\, m/s$ (se detiene), $t = 15 \\, s$.</p><p><strong>Paso 2:</strong> Ecuación de velocidad. $v_f = v_i + a t$.</p><p><strong>Paso 3:</strong> Despejar 'a' y sustituir. $a = \\frac{v_f - v_i}{t} = \\frac{0 - 30 \\, m/s}{15 \\, s} = -2 \\, m/s^2$.</p><p><strong>Respuesta:</strong> La aceleración es de -2 m/s². El signo negativo indica que es opuesta a la velocidad inicial (frenado).</p></div>
        </div>
        <div class="solved-exercise">
            <h4>Ejercicio Resuelto 4: Encuentro de Móviles (MRU)</h4>
            <p class="enunciado"><strong>Enunciado:</strong> Dos ciudades A y B están separadas por 500 km. Un coche sale de A hacia B a 90 km/h. Simultáneamente, otro coche sale de B hacia A a 60 km/h. ¿Dónde y cuándo se encuentran?</p>
            <button class="btn btn-solution" data-solution-id="sol-4">Ver Solución</button>
            <div id="sol-4" class="solution-content"><h4>Solución: Encuentro de Móviles (MRU)</h4><p><strong>Paso 1:</strong> Plantear ecuaciones de posición. Origen en A. Coche A: $x_A = 90t$. Coche B: $x_B = 500 - 60t$ (parte de 500 y se acerca al origen).</p><p><strong>Paso 2:</strong> Condición de encuentro. Se encuentran cuando sus posiciones son iguales: $x_A = x_B$.</p><p><strong>Paso 3:</strong> Resolver para 't'. $90t = 500 - 60t \\implies 150t = 500 \\implies t = \\frac{500}{150} \\approx 3.33 \\, \\text{horas}$.</p><p><strong>Paso 4:</strong> Encontrar la posición. Usamos la ecuación de A: $x_A = 90 \\, km/h \\times 3.33 \\, h = 300 \\, km$.</p><p><strong>Respuesta:</strong> Se encuentran aproximadamente a las 3.33 horas, a 300 km de la ciudad A.</p></div>
        </div>
        <div class="solved-exercise">
            <h4>Ejercicio Resuelto 5: Caída Libre</h4>
            <p class="enunciado"><strong>Enunciado:</strong> Se deja caer una piedra desde un puente y tarda 3 segundos en llegar al agua. ¿Cuál es la altura del puente? (Usa $g \\approx 9.8 \\, m/s^2$).</p>
            <button class="btn btn-solution" data-solution-id="sol-5">Ver Solución</button>
            <div id="sol-5" class="solution-content"><h4>Solución: Caída Libre</h4><p><strong>Paso 1:</strong> Datos. $v_i = 0$ (se deja caer), $t = 3 \\, s$, $a = g = 9.8 \\, m/s^2$. La altura es el desplazamiento $\\Delta y$.</p><p><strong>Paso 2:</strong> Ecuación de posición para caída libre. $\\Delta y = v_i t + \\frac{1}{2} g t^2$.</p><p><strong>Paso 3:</strong> Sustituir. $\\Delta y = (0)(3) + \\frac{1}{2} (9.8 \\, m/s^2) (3 \\, s)^2 = \\frac{1}{2} (9.8) (9) \\, m = 44.1 \\, m$.</p><p><strong>Respuesta:</strong> La altura del puente es de 44.1 metros.</p></div>
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
        // --- INICIALIZADOR PARA BOTONES DE SOLUCIÓN ---
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

        // --- INICIALIZADOR PARA EL AUTO-QUIZ ---
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
                        feedbackHTML += `<div class="feedback-item feedback-correct"><p><strong>Pregunta "${q.question}"</strong>: ¡Correcto!</p></div>`;
                    } else {
                        feedbackHTML += `<div class="feedback-item feedback-incorrect"><p><strong>Pregunta "${q.question}"</strong>: Incorrecto.</p><p><strong>Refuerzo:</strong> ${q.feedback}</p></div>`;
                    }
                } else {
                     feedbackHTML += `<div class="feedback-item feedback-incorrect"><p><strong>Pregunta "${q.question}"</strong>: No respondida.</p><p><strong>Refuerzo:</strong> ${q.feedback}</p></div>`;
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