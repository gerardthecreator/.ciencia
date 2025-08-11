// js/Quimica/Primer-parcial/Tema3/Quiz.js
import { showModal } from '../../../ui/modal.js';

const exercises = [
    { enunciado: "Un electrón en un átomo de Hidrógeno salta del nivel n=3 al n=1. ¿Emite o absorbe energía?", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Los niveles de energía más altos ($n=3$) están más lejos del núcleo y tienen más energía. Para pasar a un nivel de menor energía ($n=1$), el electrón debe liberar la diferencia de energía.</p><p><strong>Respuesta:</strong> <strong>Emite energía</strong>, generalmente en forma de un fotón de luz.</p>" },
    { enunciado: "Escribe los cuatro números cuánticos para uno de los electrones de valencia (el último) de un átomo de Litio (Li, Z=3).", solucion: "<h4>Solución</h4><p><strong>Configuración electrónica del Li:</strong> $1s^2 2s^1$. El último electrón está en el orbital 2s.</p><p><strong>Números cuánticos:</strong></p><ul><li>$n=2$ (porque está en el segundo nivel de energía).</li><li>$l=0$ (porque es un orbital 's').</li><li>$m_l=0$ (si $l=0$, $m_l$ solo puede ser 0).</li><li>$m_s=+1/2$ (por convención, el primer electrón en un orbital es espín 'up').</li></ul><p><strong>Respuesta:</strong> (2, 0, 0, +1/2).</p>" },
    { enunciado: "¿Cuál de los siguientes conjuntos de números cuánticos NO es posible? a) (2, 1, 0, +1/2) b) (3, 0, 0, -1/2) c) (2, 2, 1, +1/2)", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Hay reglas que relacionan los números cuánticos. La más importante aquí es que $l$ debe ser siempre menor que $n$.</p><p><strong>Análisis:</strong> En la opción (c), $n=2$ y $l=2$. Esto no es posible, ya que el valor máximo de $l$ para $n=2$ es $l=n-1=1$.</p><p><strong>Respuesta:</strong> (c) no es un conjunto de números cuánticos permitido.</p>" },
    { enunciado: "Escribe la configuración electrónica completa para un átomo de Fósforo (P, Z=15).", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Usamos el principio de Aufbau para llenar los orbitales en orden de energía creciente, respetando la capacidad de cada subnivel (s=2, p=6, d=10).</p><p><strong>Llenado:</strong> Llenamos hasta tener 15 electrones. $1s^2$ (2 e⁻), $2s^2$ (4 e⁻), $2p^6$ (10 e⁻), $3s^2$ (12 e⁻), $3p^3$ (15 e⁻).</p><p><strong>Respuesta:</strong> $1s^2 2s^2 2p^6 3s^2 3p^3$.</p>" },
    { enunciado: "Usando la regla de Hund, dibuja el diagrama de orbitales para el subnivel 2p del Oxígeno (O, Z=8).", solucion: "<h4>Solución</h4><p><strong>Configuración del O:</strong> $1s^2 2s^2 2p^4$. Tenemos 4 electrones para distribuir en los 3 orbitales 2p.</p><p><strong>Regla de Hund:</strong> Primero, colocamos un electrón en cada orbital con el mismo espín. Luego, apareamos. El subnivel 2p tiene 3 orbitales ($p_x, p_y, p_z$).</p><p><strong>Diagrama:</strong> [↑↓] en $p_x$, [↑] en $p_y$, [↑] en $p_z$. Hay dos electrones desapareados.</p>" }
];

const quizData = [
    { id: 'q1', question: "El número cuántico principal ($n$) describe principalmente:", options: { a: "La forma del orbital", b: "La orientación del orbital", c: "El nivel de energía y el tamaño del orbital", d: "El espín del electrón" }, correctAnswer: 'c', feedback: "Correcto. 'n' indica el nivel de energía principal; a mayor 'n', mayor es el orbital y su energía." },
    { id: 'q2', question: "¿Cuál es el valor de $l$ para un orbital de tipo 'p'?", options: { a: "0", b: "1", c: "2", d: "3" }, correctAnswer: 'b', feedback: "$l=0$ corresponde a 's', $l=1$ a 'p', $l=2$ a 'd' y $l=3$ a 'f'." },
    { id: 'q3', question: "¿Cuántos electrones como máximo pueden ocupar un subnivel 'd'?", options: { a: "2", b: "6", c: "10", d: "14" }, correctAnswer: 'c', feedback: "Un subnivel 'd' ($l=2$) tiene 5 orbitales ($m_l = -2, -1, 0, 1, 2$). Como cada orbital puede albergar 2 electrones, el total es $5 \\times 2 = 10$ electrones." },
    { id: 'q4', question: "La configuración electrónica $1s^2 2s^2 2p^6 3s^1$ corresponde al átomo de:", options: { a: "Litio (Li)", b: "Sodio (Na)", c: "Magnesio (Mg)", d: "Neón (Ne)" }, correctAnswer: 'b', feedback: "Sumando los superíndices (electrones) tenemos $2+2+6+1 = 11$ electrones. Un átomo neutro con 11 electrones también tiene 11 protones, que corresponde al Sodio (Na)." },
    { id: 'q5', question: "¿Qué principio establece que no puede haber dos electrones con los mismos cuatro números cuánticos en un átomo?", options: { a: "Regla de Hund", b: "Principio de Aufbau", c: "Principio de Incertidumbre de Heisenberg", d: "Principio de Exclusión de Pauli" }, correctAnswer: 'd', feedback: "El Principio de Exclusión de Pauli es el que establece esta regla fundamental para el llenado de orbitales." },
];

function getSolvedExercisesHTML(data) {
    let html = '';
    data.forEach((ex, index) => {
        const i = index + 1;
        html += `<div class="solved-exercise"><h4>Ejercicio Resuelto ${i}</h4><p class="enunciado">${ex.enunciado}</p><button class="btn btn-solution" data-solution-id="sol-quim3-${i}">Ver Solución</button><div id="sol-quim3-${i}" class="solution-content">${ex.solucion}</div></div>`;
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