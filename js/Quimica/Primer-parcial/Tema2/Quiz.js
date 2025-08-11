// js/Quimica/Primer-parcial/Tema2/Quiz.js

import { showModal } from '../../../ui/modal.js';

const exercises = [
    { enunciado: "Un compuesto contiene 40.0% de Carbono, 6.7% de Hidrógeno y 53.3% de Oxígeno por masa. ¿Viola esto la Ley de las Proporciones Definidas?", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> La ley establece que un compuesto *dado* siempre tiene la misma proporción. No dice que no puedan existir *otros* compuestos con los mismos elementos en diferentes proporciones.</p><p><strong>Respuesta:</strong> No, no la viola. Siempre que esta proporción sea constante para este compuesto específico (como el ácido acético), la ley se cumple.</p>" },
    { enunciado: "El Uranio tiene tres isótopos principales: U-234, U-235 y U-238. ¿Qué tienen en común y en qué se diferencian?", solucion: "<h4>Solución</h4><p><strong>En común:</strong> Al ser todos átomos de Uranio, tienen el mismo número de protones (Z=92) y, si son neutros, 92 electrones.</p><p><strong>Diferencia:</strong> Se diferencian en el número de neutrones. U-234 tiene (234-92)=142 neutrones, U-235 tiene 143, y U-238 tiene 146.</p>" },
    { enunciado: "Escribe la fórmula química para el compuesto iónico formado por Magnesio (Mg) y Cloro (Cl).", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> El Mg (Grupo 2) tiende a perder 2 electrones para formar el catión $\\ce{Mg^{2+}}$. El Cl (Grupo 17) tiende a ganar 1 electrón para formar el anión $\\ce{Cl^{-}}$.</p><p><strong>Cálculo:</strong> Para que el compuesto sea eléctricamente neutro, necesitamos dos iones de Cloro por cada ión de Magnesio. La fórmula es $\\ce{MgCl2}$.</p>" },
    { enunciado: "Define catión y anión, y da un ejemplo de cada uno a partir del Oxígeno (O) y el Potasio (K).", solucion: "<h4>Solución</h4><p><strong>Definiciones:</strong> Un <strong>catión</strong> es un ión con carga positiva, formado cuando un átomo pierde electrones. Un <strong>anión</strong> es un ión con carga negativa, formado cuando un átomo gana electrones.</p><p><strong>Ejemplos:</strong> El Potasio (metal) pierde un electrón para formar el catión $\\ce{K+}$. El Oxígeno (no metal) gana dos electrones para formar el anión $\\ce{O^{2-}}$.</p>" },
    { enunciado: "Si 1.0 g de Hidrógeno reacciona completamente con 19.0 g de Flúor, ¿qué masa de Fluoruro de Hidrógeno (HF) se forma?", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Se aplica la Ley de Conservación de la Masa de Lavoisier, que establece que la masa total de los reactivos debe ser igual a la masa total de los productos.</p><p><strong>Cálculo:</strong> Masa total = Masa de H + Masa de F = $1.0 \\, g + 19.0 \\, g = 20.0 \\, g$. Se forman 20.0 g de HF.</p>" }
];

const quizData = [
    { id: 'q1', question: "Según Lavoisier, si quemas 12g de Carbono con 32g de Oxígeno para formar $\\ce{CO2}$, ¿qué masa de $\\ce{CO2}$ se produce?", options: { a: "20 g", b: "32 g", c: "44 g", d: "No se puede saber" }, correctAnswer: 'c', feedback: "La Ley de Conservación de la Masa dice que la masa de los reactivos (12g + 32g) es igual a la de los productos (44g)." },
    { id: 'q2', question: "Los isótopos $\\ce{^{12}C}$ y $\\ce{^{13}C}$ tienen el mismo número de:", options: { a: "Neutrones", b: "Protones y electrones", c: "Protones y neutrones", d: "Electrones y neutrones" }, correctAnswer: 'b', feedback: "Los isótopos son átomos del mismo elemento, por lo que siempre tienen el mismo número de protones (y electrones si son neutros). Difieren en el número de neutrones." },
    { id: 'q3', question: "Un átomo de Sodio (Na) pierde un electrón. ¿En qué se convierte?", options: { a: "En un anión, Na⁻", b: "En un isótopo de Sodio", c: "En un catión, Na⁺", d: "En un átomo de Neón" }, correctAnswer: 'c', feedback: "Al perder un electrón (carga negativa), el átomo queda con una carga neta positiva, convirtiéndose en un catión." },
    { id: 'q4', question: "Los elementos del Grupo 17 de la tabla periódica son conocidos como:", options: { a: "Gases nobles", b: "Metales alcalinos", c: "Metales alcalinotérreos", d: "Halógenos" }, correctAnswer: 'd', feedback: "Los elementos del Grupo 17 (Flúor, Cloro, etc.) son los halógenos, conocidos por ser muy reactivos y formar sales." },
    { id: 'q5', question: "El compuesto $\\ce{H2S}$ es un ejemplo de:", options: { a: "Un compuesto iónico", b: "Una molécula", c: "Un elemento", d: "Un metaloide" }, correctAnswer: 'b', feedback: "El Hidrógeno y el Azufre son no metales que se unen compartiendo electrones, formando una molécula." },
];

function getSolvedExercisesHTML(data) {
    let html = '';
    data.forEach((ex, index) => {
        const i = index + 1;
        html += `
            <div class="solved-exercise">
                <h4>Ejercicio Resuelto ${i}</h4>
                <p class="enunciado">${ex.enunciado}</p>
                <button class="btn btn-solution" data-solution-id="sol-quim2-${i}">Ver Solución</button>
                <div id="sol-quim2-${i}" class="solution-content">${ex.solucion}</div>
            </div>
        `;
    });
    return `<section class="topic-section"><h2>Ejercicios Resueltos</h2>${html}</section>`;
}

function getAutoQuizHTML(data) {
    let questionsHTML = '';
    data.forEach((q, index) => {
        questionsHTML += `<div class="quiz-question" id="${q.id}"><p><strong>Pregunta ${index + 1}:</strong> ${q.question}</p><div class="quiz-options"><label><input type="radio" name="${q.id}" value="a"> ${q.options.a}</label><label><input type="radio" name="${q.id}" value="b"> ${q.options.b}</label><label><input type="radio" name="${q.id}" value="c"> ${q.options.c}</label><label><input type="radio" name="${q.id}" value="d"> ${q.options.d}</label></div></div>`;
    });
    return `<h2>Auto-Quiz Evaluado</h2><p>¡Pon a prueba tus conocimientos!</p><div class="quiz-timer">Tiempo restante: <span id="timer">30:00</span></div><form id="auto-quiz-form">${questionsHTML}<button type="submit" class="btn">Calificar Quiz</button></form><div id="quiz-results"></div>`;
}

function initQuizLogic(data) {
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
        data.forEach((q, index) => {
            const userAnswer = form.querySelector(`input[name="${q.id}"]:checked`);
            if (userAnswer) {
                if (userAnswer.value === q.correctAnswer) {
                    score++;
                    feedbackHTML += `<div class="feedback-item feedback-correct"><p><strong>Pregunta ${index + 1}:</strong> ¡Correcto!</p></div>`;
                } else {
                    feedbackHTML += `<div class="feedback-item feedback-incorrect"><p><strong>Pregunta ${index + 1}:</strong> Incorrecto.</p><p><strong>Explicación:</strong> ${q.feedback}</p></div>`;
                }
            } else {
                feedbackHTML += `<div class="feedback-item feedback-incorrect"><p><strong>Pregunta ${index + 1}:</strong> No respondida.</p><p><strong>Explicación:</strong> ${q.feedback}</p></div>`;
            }
        });
        const percentage = Math.round((score / data.length) * 100);
        const summaryHTML = `<div class="results-summary">Tu puntaje es: ${percentage}% (${score} de ${data.length} correctas)</div>`;
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

export const quiz = {
    getHTML: () => `${getSolvedExercisesHTML(exercises)}<section class="auto-quiz-container">${getAutoQuizHTML(quizData)}</section>`,
    init: () => {
        document.querySelectorAll('.btn-solution').forEach(button => {
            button.addEventListener('click', () => {
                const solutionId = button.dataset.solutionId;
                const solutionContent = document.getElementById(solutionId);
                if (solutionContent) { showModal(solutionContent.innerHTML); }
            });
        });
        initQuizLogic(quizData);
    }
};