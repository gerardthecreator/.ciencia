// js/Quimica/Primer-parcial/Tema4/Quiz.js
import { showModal } from '../../../ui/modal.js';

const exercises = [
 { enunciado: "Ordena los siguientes elementos de menor a mayor radio atómico: Na, Cl, K.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> El radio atómico aumenta hacia abajo y hacia la izquierda. El Cloro está a la derecha del Sodio (Na), por lo que es más pequeño. El Potasio (K) está justo debajo del Sodio, por lo que es más grande.</p><p><strong>Respuesta:</strong> Cl < Na < K.</p>" },
 { enunciado: "Ordena los siguientes elementos de menor a mayor energía de ionización: Be, C, F.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> La energía de ionización aumenta a lo largo de un período (de izquierda a derecha) y hacia arriba.</p><p><strong>Respuesta:</strong> Todos están en el mismo período (Período 2). El orden de izquierda a derecha es Be, C, F. Por lo tanto, el orden de energía de ionización creciente es Be < C < F.</p>" },
 { enunciado: "Compara el radio del ión $\\ce{Na+}$ con el del átomo neutro de Neón (Ne).", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Ambos tienen la misma configuración electrónica ($1s^2 2s^2 2p^6$), es decir, son isoelectrónicos. Sin embargo, el Sodio (Z=11) tiene un protón más en su núcleo que el Neón (Z=10).</p><p><strong>Respuesta:</strong> El núcleo del $\\ce{Na+}$ atrae a los 10 electrones con más fuerza que el núcleo del Ne. Por lo tanto, el radio del ión $\\ce{Na+}$ es <strong>menor</strong> que el del átomo de Ne.</p>" },
 { enunciado: "¿Por qué los gases nobles (Grupo 18) tienen afinidades electrónicas generalmente positivas (desfavorables)?", solucion: "<h4>Solución</h4><p><strong>Justificación:</strong> Los gases nobles tienen sus niveles de energía de valencia completamente llenos ($s^2 p^6$). Para añadir un electrón extra, este tendría que ocupar un nuevo nivel de energía mucho más alto ($n+1$), lo cual es energéticamente muy desfavorable. Por eso, se debe suministrar energía para forzar al átomo a aceptar el electrón.</p>" },
 { enunciado: "Predice si el enlace en el compuesto $\\ce{CaO}$ (Óxido de Calcio) es predominantemente iónico o covalente.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Analizamos la posición de los elementos. El Calcio (Ca) es un metal alcalinotérreo (Grupo 2). El Oxígeno (O) es un no metal (Grupo 16). Hay una gran distancia entre ellos en la tabla periódica.</p><p><strong>Respuesta:</strong> La gran diferencia de electronegatividad entre un metal y un no metal tan separados favorece la transferencia de electrones, por lo que el enlace es predominantemente <strong>iónico</strong>.</p>" }
];

const quizData = [
 { id: 'q1', question: "El elemento Calcio (Ca, Z=20) pertenece al bloque:", options: { a: "s", b: "p", c: "d", d: "f" }, correctAnswer: 'a', feedback: "La configuración del Calcio es $[Ar] 4s^2$. El último electrón entra en el orbital 's', por lo que pertenece al bloque s (Grupo 2)." },
 { id: 'q2', question: "¿Qué tipo de compuesto es más probable que se forme entre el Potasio (K, Grupo 1) y el Bromo (Br, Grupo 17)?", options: { a: "Molecular (covalente)", b: "Iónico", c: "Metálico", d: "No reaccionan" }, correctAnswer: 'b', feedback: "El Potasio es un metal y el Bromo es un no metal. Están muy separados en la tabla, por lo que el metal transferirá un electrón al no metal, formando un compuesto iónico (KBr)." },
 { id: 'q3', question: "¿Cuál de los siguientes elementos tiene el mayor radio atómico?", options: { a: "F (Flúor)", b: "Li (Litio)", c: "Cs (Cesio)", d: "O (Oxígeno)" }, correctAnswer: 'c', feedback: "El radio atómico aumenta hacia abajo y hacia la izquierda. El Cesio (Cs) es el que está más abajo y a la izquierda de las opciones." },
 { id: 'q4', question: "¿Cuál de los siguientes elementos tiene la mayor energía de ionización?", options: { a: "F (Flúor)", b: "Li (Litio)", c: "Cs (Cesio)", d: "B (Boro)" }, correctAnswer: 'a', feedback: "La energía de ionización aumenta hacia arriba y hacia la derecha. El Flúor (F) es el que está más arriba y a la derecha." },
 { id: 'q5', question: "La tendencia de un átomo a atraer electrones en un enlace químico se llama:", options: { a: "Radio iónico", b: "Afinidad electrónica", c: "Energía de ionización", d: "Electronegatividad" }, correctAnswer: 'd', feedback: "Esa es la definición de electronegatividad, una propiedad crucial para entender la naturaleza de los enlaces químicos." },
];

function getSolvedExercisesHTML(data) {
 let html = '';
 data.forEach((ex, index) => {
  const i = index + 1;
  html += `
            <div class="solved-exercise">
                <h4>Ejercicio Resuelto ${i}</h4>
                <p class="enunciado">${ex.enunciado}</p>
                <button class="btn btn-solution" data-solution-id="sol-quim4-${i}">Ver Solución</button>
                <div id="sol-quim4-${i}" class="solution-content">${ex.solucion}</div>
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