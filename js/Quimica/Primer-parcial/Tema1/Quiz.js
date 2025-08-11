// js/Quimica/Primer-parcial/Tema1/Quiz.js

import { showModal } from '../../../ui/modal.js';

const exercises = [
 { enunciado: "Clasifica las siguientes como propiedad física o química: a) El punto de ebullición del agua es 100°C. b) El gas natural arde en una llama.", solucion: "<h4>Solución</h4><p><strong>a) Punto de ebullición:</strong> Es una <strong>propiedad física</strong>. El agua cambia de estado (líquido a gas), pero su composición química (H₂O) no cambia.</p><p><strong>b) Arder:</strong> Es una <strong>propiedad química</strong>. La combustión es una reacción que transforma el gas natural y el oxígeno en nuevas sustancias (CO₂ y H₂O).</p>" },
 { enunciado: "Clasifica las siguientes como sustancia pura o mezcla: a) Azúcar (Sacarosa, C₁₂H₂₂O₁₁). b) Leche. c) Oro (Au).", solucion: "<h4>Solución</h4><p><strong>a) Azúcar:</strong> Es una <strong>sustancia pura</strong> (un compuesto), ya que tiene una composición química fija y definida.</p><p><strong>b) Leche:</strong> Es una <strong>mezcla</strong> (heterogénea a nivel microscópico, pero a menudo tratada como homogénea), ya que contiene agua, grasas, proteínas, etc., sin una proporción fija.</p><p><strong>c) Oro:</strong> Es una <strong>sustancia pura</strong> (un elemento).</p>" },
 { enunciado: "Un corredor de maratón bebe 1.5 Litros de agua. ¿Cuántos mililitros (mL) son?", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> El prefijo 'mili' significa una milésima parte (1/1000). Por lo tanto, 1 Litro contiene 1000 mililitros.</p><p><strong>Cálculo:</strong> $1.5 \\, L \\times \\frac{1000 \\, mL}{1 \\, L} = 1500 \\, mL$.</p>" },
 { enunciado: "La densidad del mercurio es 13.6 g/cm³. ¿Cuál es su densidad en kg/m³?", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Necesitamos dos factores de conversión: 1 kg = 1000 g y 1 m = 100 cm. Como el volumen está al cubo, debemos elevar al cubo el factor de conversión de longitud.</p><p><strong>Cálculo:</strong> $13.6 \\frac{g}{cm^3} \\times \\frac{1 \\, kg}{1000 \\, g} \\times (\\frac{100 \\, cm}{1 \\, m})^3 = 13.6 \\frac{g}{cm^3} \\times \\frac{1 \\, kg}{1000 \\, g} \\times \\frac{1,000,000 \\, cm^3}{1 \\, m^3} = 13600 \\frac{kg}{m^3}$.</p>" },
 { enunciado: "Indica el número de cifras significativas en cada medida: a) 205.0 m b) 0.005060 kg", solucion: "<h4>Solución</h4><p><strong>a) 205.0 m:</strong> Tiene <strong>4</strong> cifras significativas. El cero entre dígitos distintos de cero es significativo, y el cero final después del punto decimal también lo es.</p><p><strong>b) 0.005060 kg:</strong> Tiene <strong>4</strong> cifras significativas. Los ceros iniciales no son significativos. El cero entre el 5 y el 6 es significativo, y el cero final a la derecha también lo es.</p>" }
];

const quizData = [
 { id: 'q1', question: "¿Cuál de las siguientes es una propiedad química del hierro?", options: { a: "Es un sólido a temperatura ambiente", b: "Se oxida en presencia de aire y humedad", c: "Tiene un punto de fusión de 1538 °C", d: "Es un buen conductor eléctrico" }, correctAnswer: 'b', feedback: "La oxidación es una transformación química, donde el hierro reacciona con el oxígeno para formar un nuevo compuesto (óxido de hierro)." },
 { id: 'q2', question: "El aire que respiramos es un ejemplo de:", options: { a: "Un elemento", b: "Un compuesto", c: "Una mezcla homogénea", d: "Una mezcla heterogénea" }, correctAnswer: 'c', feedback: "El aire es una mezcla de gases (Nitrógeno, Oxígeno, etc.) cuya composición es uniforme en cualquier parte que tomes." },
 { id: 'q3', question: "Convertir 2500 mL a Litros:", options: { a: "250 L", b: "25 L", c: "0.25 L", d: "2.5 L" }, correctAnswer: 'd', feedback: "Sabiendo que 1000 mL = 1 L, dividimos 2500 entre 1000, lo que da 2.5 L." },
 { id: 'q4', question: "El paso del método científico que consiste en proponer una explicación tentativa es:", options: { a: "Observación", b: "Ley", c: "Hipótesis", d: "Experimentación" }, correctAnswer: 'c', feedback: "La hipótesis es la suposición informada que se formula para ser probada mediante la experimentación." },
 { id: 'q5', question: "¿Cuántas cifras significativas tiene el número 0.0520 g?", options: { a: "2", b: "3", c: "4", d: "5" }, correctAnswer: 'b', feedback: "Los ceros a la izquierda no son significativos. Los dígitos distintos de cero (5 y 2) lo son. El cero a la derecha del 2 también es significativo porque está después de la coma decimal. Por tanto, 3 cifras (5, 2, 0)." }
];

// --- LÓGICA REUTILIZABLE DEL QUIZ ---
// (Esta parte es idéntica a los otros archivos de quiz)
function getSolvedExercisesHTML(data) {
 let html = '';
 data.forEach((ex, index) => {
  const i = index + 1;
  html += `
            <div class="solved-exercise">
                <h4>Ejercicio Resuelto ${i}</h4>
                <p class="enunciado">${ex.enunciado}</p>
                <button class="btn btn-solution" data-solution-id="sol-quim1-${i}">Ver Solución</button>
                <div id="sol-quim1-${i}" class="solution-content">${ex.solucion}</div>
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
    if (solutionContent) {
     showModal(solutionContent.innerHTML);
    }
   });
  });
  initQuizLogic(quizData);
 }
};