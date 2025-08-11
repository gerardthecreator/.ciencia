// js/Fisica/Primer-parcial/Tema2/Quiz.js

import { showModal } from '../../../ui/modal.js';

// --- DATOS DEL AUTO-QUIZ ---
const quizData = [
 { id: 'q1', question: "Un atleta corre 400m en una pista circular y vuelve al punto de partida. ¿Cuál es su desplazamiento?", options: { a: "400 m", b: "0 m", c: "800 m", d: "200 m" }, correctAnswer: 'b', feedback: "El desplazamiento es el vector desde el inicio hasta el final. Si vuelve al mismo punto, el desplazamiento es cero." },
 { id: 'q2', question: "La derivada de la posición con respecto al tiempo es la:", options: { a: "Aceleración", b: "Distancia", c: "Rapidez", d: "Velocidad" }, correctAnswer: 'd', feedback: "Correcto, $\\vec{v}(t) = d\\vec{r}/dt$. Es la definición de velocidad instantánea." },
 { id: 'q3', question: "En un movimiento de proyectiles, la componente horizontal de la velocidad:", options: { a: "Aumenta", b: "Disminuye", c: "Permanece constante", d: "Es siempre cero" }, correctAnswer: 'c', feedback: "Al no haber aceleración horizontal (despreciando la resistencia del aire), la velocidad en el eje X es constante (MRU)." },
 { id: 'q4', question: "Un proyectil alcanza su altura máxima cuando:", options: { a: "Su velocidad total es cero", b: "Su aceleración es cero", c: "Su componente vertical de velocidad es cero", d: "Su componente horizontal de velocidad es cero" }, correctAnswer: 'c', feedback: "En el punto más alto, el proyectil deja de subir y empieza a bajar, por lo que $v_y = 0$ por un instante." },
 { id: 'q5', question: "Un coche toma una curva a rapidez constante. ¿Existe aceleración?", options: { a: "No, porque la rapidez es constante", b: "Sí, la aceleración tangencial", c: "Sí, la aceleración centrípeta", d: "No, porque es un MRU" }, correctAnswer: 'c', feedback: "Sí. Aunque la rapidez es constante, la dirección del vector velocidad cambia, y este cambio es causado por la aceleración centrípeta." },
 { id: 'q6', question: "La aceleración centrípeta siempre apunta:", options: { a: "En la dirección del movimiento", b: "En contra de la dirección del movimiento", c: "Hacia el centro de la trayectoria circular", d: "Hacia afuera del centro de la trayectoria" }, correctAnswer: 'c', feedback: "Su función es 'tirar' del objeto para mantenerlo en la trayectoria curva, por lo que siempre apunta hacia el centro." },
 { id: 'q7', question: "Si un objeto en movimiento circular aumenta su rapidez, ¿qué tipo de aceleración tiene?", options: { a: "Solo centrípeta", b: "Solo tangencial", c: "Centrípeta y tangencial", d: "Ninguna" }, correctAnswer: 'c', feedback: "Necesita aceleración centrípeta para curvar y aceleración tangencial para aumentar su rapidez." },
 { id: 'q8', question: "La velocidad angular ($\\omega$) se mide en:", options: { a: "m/s", b: "m/s²", c: "grados/s", d: "rad/s" }, correctAnswer: 'd', feedback: "La unidad estándar en física para las magnitudes angulares es el radián." },
 { id: 'q9', question: "Un proyectil es lanzado con $v_{0x}=30\\,m/s$ y $v_{0y}=40\\,m/s$. ¿Cuál es su rapidez inicial $v_0$?", options: { a: "70 m/s", b: "10 m/s", c: "50 m/s", d: "1200 m/s" }, correctAnswer: 'c', feedback: "Se usa Pitágoras: $v_0 = \\sqrt{v_{0x}^2 + v_{0y}^2} = \\sqrt{30^2 + 40^2} = \\sqrt{900+1600} = \\sqrt{2500} = 50 \\, m/s$." },
 { id: 'q10', question: "Un disco gira a 10 rad/s. Un punto a 0.5 m del centro, ¿qué rapidez tangencial tiene?", options: { a: "20 m/s", b: "10.5 m/s", c: "5 m/s", d: "2 m/s" }, correctAnswer: 'c', feedback: "Se usa la relación $v_t = \\omega \\cdot r = 10 \\, rad/s \\cdot 0.5 \\, m = 5 \\, m/s$." }
];

function getSolvedExercisesHTML() {
 return `
    <section class="topic-section">
        <h2>Ejercicios Resueltos</h2>
        <p>Estudia estos ejemplos para afianzar los conceptos.</p>
        <!-- EJERCICIOS 1-10 -->
        <div class="solved-exercise"><h4>1. Desplazamiento vs Distancia</h4><p class="enunciado">Un cartero conduce 3 km al Este y luego 4 km al Norte. Encuentre la distancia recorrida y la magnitud del desplazamiento.</p><button class="btn btn-solution" data-solution-id="sol-1">Ver Solución</button><div id="sol-1" class="solution-content"><h4>Solución</h4><p><strong>Distancia:</strong> Es la suma de los caminos: $3 \\, km + 4 \\, km = 7 \\, km$.</p><p><strong>Desplazamiento:</strong> Es la hipotenusa de un triángulo rectángulo con catetos 3 y 4. $|\\Delta\\vec{r}| = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5 \\, km$.</p></div></div>
        <div class="solved-exercise"><h4>2. Velocidad Media</h4><p class="enunciado">El viaje del cartero del ejercicio 1 duró 0.5 horas. Calcule su rapidez media y la magnitud de su velocidad media.</p><button class="btn btn-solution" data-solution-id="sol-2">Ver Solución</button><div id="sol-2" class="solution-content"><h4>Solución</h4><p><strong>Rapidez Media:</strong> $\\frac{\\text{Distancia}}{\\text{Tiempo}} = \\frac{7 \\, km}{0.5 \\, h} = 14 \\, km/h$.</p><p><strong>Velocidad Media:</strong> $|\\vec{v}_{med}| = \\frac{|\\Delta\\vec{r}|}{\\text{Tiempo}} = \\frac{5 \\, km}{0.5 \\, h} = 10 \\, km/h$.</p></div></div>
        <div class="solved-exercise"><h4>3. Derivadas en Cinemática</h4><p class="enunciado">La posición de una partícula es $\\vec{r}(t) = (3t^2 - 1)\\hat{i} + (4t^3)\\hat{j}$. Encuentre $\\vec{v}(t)$ y $\\vec{a}(t)$.</p><button class="btn btn-solution" data-solution-id="sol-3">Ver Solución</button><div id="sol-3" class="solution-content"><h4>Solución</h4><p><strong>Velocidad:</strong> Derivamos la posición. $\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = (6t)\\hat{i} + (12t^2)\\hat{j}$.</p><p><strong>Aceleración:</strong> Derivamos la velocidad. $\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = (6)\\hat{i} + (24t)\\hat{j}$.</p></div></div>
        <div class="solved-exercise"><h4>4. Componentes de Proyectil</h4><p class="enunciado">Un balón es pateado a 25 m/s con un ángulo de 37°. Calcule las componentes iniciales de la velocidad.</p><button class="btn btn-solution" data-solution-id="sol-4">Ver Solución</button><div id="sol-4" class="solution-content"><h4>Solución</h4><p>$v_{0x} = v_0 \\cos(\\theta) = 25 \\cdot \\cos(37^\\circ) \\approx 25 \\cdot 0.8 = 20 \\, m/s$.</p><p>$v_{0y} = v_0 \\sin(\\theta) = 25 \\cdot \\sin(37^\\circ) \\approx 25 \\cdot 0.6 = 15 \\, m/s$.</p></div></div>
        <div class="solved-exercise"><h4>5. Altura Máxima de Proyectil</h4><p class="enunciado">Para el balón del ejercicio 4, calcule la altura máxima que alcanza.</p><button class="btn btn-solution" data-solution-id="sol-5">Ver Solución</button><div id="sol-5" class="solution-content"><h4>Solución</h4><p>En la altura máxima, $v_y = 0$. Usamos $v_y^2 = v_{0y}^2 + 2g\\Delta y$.</p><p>$0 = (15)^2 + 2(-9.8)h_{max} \\implies 19.6 h_{max} = 225 \\implies h_{max} \\approx 11.5 \\, m$.</p></div></div>
        <div class="solved-exercise"><h4>6. Alcance de Proyectil</h4><p class="enunciado">Para el balón del ejercicio 4, calcule el alcance horizontal.</p><button class="btn btn-solution" data-solution-id="sol-6">Ver Solución</button><div id="sol-6" class="solution-content"><h4>Solución</h4><p>Tiempo de subida: $v_y = v_{0y} + gt \\implies 0 = 15 - 9.8t_s \\implies t_s \\approx 1.53 \\, s$.</p><p>Tiempo total de vuelo: $t_{vuelo} = 2t_s \\approx 3.06 \\, s$.</p><p>Alcance: $R = v_{0x} \\cdot t_{vuelo} = 20 \\cdot 3.06 \\approx 61.2 \\, m$.</p></div></div>
        <div class="solved-exercise"><h4>7. Conversión Angular a Lineal</h4><p class="enunciado">Una rueda de 0.4 m de radio gira a 20 rad/s. ¿Cuál es la rapidez tangencial de un punto en el borde?</p><button class="btn btn-solution" data-solution-id="sol-7">Ver Solución</button><div id="sol-7" class="solution-content"><h4>Solución</h4><p>Usamos la relación $v_t = \\omega \\cdot r$.</p><p>$v_t = (20 \\, rad/s) \\cdot (0.4 \\, m) = 8 \\, m/s$.</p></div></div>
        <div class="solved-exercise"><h4>8. Aceleración Centrípeta</h4><p class="enunciado">Para la rueda del ejercicio 7, ¿cuál es la aceleración centrípeta de un punto en el borde?</p><button class="btn btn-solution" data-solution-id="sol-8">Ver Solución</button><div id="sol-8" class="solution-content"><h4>Solución</h4><p>Usamos la fórmula $a_c = \\frac{v_t^2}{r}$.</p><p>$a_c = \\frac{(8 \\, m/s)^2}{0.4 \\, m} = \\frac{64}{0.4} = 160 \\, m/s^2$.</p></div></div>
        <div class="solved-exercise"><h4>9. Aceleración Tangencial</h4><p class="enunciado">La rueda del ejercicio 7 comienza a frenar con una aceleración angular de $\\alpha = -5 \\, rad/s^2$. ¿Cuál es su aceleración tangencial?</p><button class="btn btn-solution" data-solution-id="sol-9">Ver Solución</button><div id="sol-9" class="solution-content"><h4>Solución</h4><p>Usamos la relación $a_t = \\alpha \\cdot r$.</p><p>$a_t = (-5 \\, rad/s^2) \\cdot (0.4 \\, m) = -2 \\, m/s^2$. El signo negativo indica que está frenando.</p></div></div>
        <div class="solved-exercise"><h4>10. Aceleración Total</h4><p class="enunciado">En el instante en que la rueda del ejercicio 9 frena, ¿cuál es el módulo de la aceleración total?</p><button class="btn btn-solution" data-solution-id="sol-10">Ver Solución</button><div id="sol-10" class="solution-content"><h4>Solución</h4><p>La aceleración total es la suma vectorial de la centrípeta y la tangencial. Como son perpendiculares, usamos Pitágoras.</p><p>$|\\vec{a}_{total}| = \\sqrt{a_t^2 + a_c^2} = \\sqrt{(-2)^2 + (160)^2} = \\sqrt{4 + 25600} = \\sqrt{25604} \\approx 160.01 \\, m/s^2$.</p></div></div>
    </section>
    `;
}

function getAutoQuizHTML() {
 let questionsHTML = '';
 quizData.forEach((q, index) => {
  questionsHTML += `<div class="quiz-question" id="${q.id}"><p><strong>Pregunta ${index + 1}:</strong> ${q.question}</p><div class="quiz-options"><label><input type="radio" name="${q.id}" value="a"> ${q.options.a}</label><label><input type="radio" name="${q.id}" value="b"> ${q.options.b}</label><label><input type="radio" name="${q.id}" value="c"> ${q.options.c}</label><label><input type="radio" name="${q.id}" value="d"> ${q.options.d}</label></div></div>`;
 });
 return `<section class="auto-quiz-container"><h2>Auto-Quiz Evaluado</h2><p>¡Pon a prueba tus conocimientos!</p><div class="quiz-timer">Tiempo restante: <span id="timer">30:00</span></div><form id="auto-quiz-form">${questionsHTML}<button type="submit" class="btn">Calificar Quiz</button></form><div id="quiz-results"></div></section>`;
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
   quizData.forEach((q, index) => {
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