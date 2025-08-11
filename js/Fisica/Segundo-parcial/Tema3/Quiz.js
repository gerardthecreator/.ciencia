// js/Fisica/Segundo-parcial/Tema3/Quiz.js

import { showModal } from '../../../ui/modal.js';

// --- DATOS DEL AUTO-QUIZ ---
const quizData = [
 { id: 'q1', question: "Un objeto se mueve a velocidad constante hacia la derecha. ¿Cuál es la fuerza neta sobre él?", options: { a: "Una fuerza constante a la derecha", b: "Una fuerza que disminuye", c: "Cero", d: "Una fuerza hacia arriba" }, correctAnswer: 'c', feedback: "Según la 1ª Ley de Newton, si la velocidad es constante (incluyendo el reposo), la fuerza neta es cero." },
 { id: 'q2', question: "Si duplicas la fuerza neta sobre un objeto, su aceleración...", options: { a: "Se reduce a la mitad", b: "Se duplica", c: "Permanece igual", d: "Se cuadruplica" }, correctAnswer: 'b', feedback: "Según $\\sum F = ma$, la fuerza y la aceleración son directamente proporcionales. Si F se duplica, 'a' también." },
 { id: 'q3', question: "El peso de un objeto es:", options: { a: "Lo mismo que su masa", b: "Una medida de su inercia", c: "La fuerza gravitacional que actúa sobre él", d: "Una propiedad intrínseca del objeto" }, correctAnswer: 'c', feedback: "El peso es una fuerza ($P=mg$), mientras que la masa es una medida de la inercia (un escalar)." },
 { id: 'q4', question: "La fuerza Normal ($\\vec{N}$) es siempre:", options: { a: "Igual al peso", b: "Opuesta al peso", c: "Perpendicular a la superficie de contacto", d: "Paralela a la superficie de contacto" }, correctAnswer: 'c', feedback: "La palabra 'Normal' en este contexto significa perpendicular. No siempre es igual al peso, especialmente en planos inclinados." },
 { id: 'q5', question: "Un caballo tira de una carreta. Según la 3ª Ley de Newton, la carreta tira del caballo con una fuerza:", options: { a: "Menor", b: "Mayor", c: "Igual y opuesta", d: "Nula" }, correctAnswer: 'c', feedback: "Las fuerzas de acción-reacción siempre son iguales en magnitud y opuestas en dirección. El sistema se mueve porque la fuerza del caballo contra el suelo es mayor que la fricción." },
 { id: 'q6', question: "En un DCL de un bloque que se desliza por un plano inclinado, el peso ($\\vec{P}$) debe ser:", options: { a: "Paralelo al plano", b: "Perpendicular al plano", c: "Descompuesto en componentes paralela y perpendicular al plano", d: "Ignorado" }, correctAnswer: 'c', feedback: "El peso siempre es vertical hacia abajo. Para aplicar la 2ª Ley, se descompone en los ejes alineados con el plano inclinado." },
 { id: 'q7', question: "Un objeto de 5 kg experimenta una fuerza neta de 20 N. ¿Cuál es su aceleración?", options: { a: "100 m/s²", b: "4 m/s²", c: "0.25 m/s²", d: "25 m/s²" }, correctAnswer: 'b', feedback: "Usando $a = F/m$, tenemos $a = 20 \\, N / 5 \\, kg = 4 \\, m/s^2$." },
 { id: 'q8', question: "La fuerza de Tensión ($\\vec{T}$) en una cuerda siempre...", options: { a: "Empuja", b: "Tira (o hala)", c: "Es igual al peso del objeto que cuelga", d: "Actúa perpendicular a la cuerda" }, correctAnswer: 'b', feedback: "Las cuerdas no pueden empujar, solo pueden tirar a lo largo de su longitud." },
 { id: 'q9', question: "El par acción-reacción de la fuerza Normal (la mesa empujando al libro) es:", options: { a: "El peso del libro", b: "La Tierra tirando del libro", c: "El libro empujando a la mesa", d: "La fricción" }, correctAnswer: 'c', feedback: "La acción es Mesa->Libro. La reacción debe ser Libro->Mesa. El par acción-reacción nunca actúa sobre el mismo cuerpo." },
 { id: 'q10', question: "Si un objeto está en equilibrio, ¿se puede concluir que no hay fuerzas actuando sobre él?", options: { a: "Sí, no hay fuerzas", b: "No, significa que la suma vectorial de las fuerzas es cero", c: "No, significa que solo actúa la gravedad", d: "Sí, porque no se mueve" }, correctAnswer: 'b', feedback: "Puede haber múltiples fuerzas actuando (peso, normal, tensión, etc.), pero si el objeto está en equilibrio, su resultante (suma vectorial) es nula." }
];

function getSolvedExercisesHTML() {
 return `
    <section class="topic-section">
        <h2>Ejercicios Resueltos</h2>
        <p>Estudia estos ejemplos para dominar el método del DCL.</p>
        <!-- EJERCICIOS 1-10 -->
        <div class="solved-exercise"><h4>1. Equilibrio Simple</h4><p class="enunciado">Una lámpara de 5 kg cuelga del techo. Dibuja el DCL y calcula la tensión en el cable.</p><button class="btn btn-solution" data-solution-id="sol-1">Ver Solución</button><div id="sol-1" class="solution-content"><h4>Solución</h4><p><strong>DCL:</strong> Un punto con una fuerza $\\vec{T}$ (Tensión) hacia arriba y $\\vec{P}$ (Peso) hacia abajo.</p><p><strong>Equilibrio (1ª Ley):</strong> $\\sum F_y = 0 \\implies T - P = 0 \\implies T = P$.</p><p><strong>Cálculo:</strong> $P = mg = 5 \\, kg \\cdot 9.8 \\, m/s^2 = 49 \\, N$. Por lo tanto, $T = 49 \\, N$.</p></div></div>
        <div class="solved-exercise"><h4>2. Fuerza Aplicada</h4><p class="enunciado">Un bloque de 20 kg en reposo sobre una superficie sin fricción es empujado con una fuerza horizontal de 60 N. Calcula su aceleración.</p><button class="btn btn-solution" data-solution-id="sol-2">Ver Solución</button><div id="sol-2" class="solution-content"><h4>Solución</h4><p><strong>DCL:</strong> Fuerzas verticales (Peso y Normal) se cancelan. La única fuerza horizontal es la aplicada.</p><p><strong>2ª Ley (Eje X):</strong> $\\sum F_x = F_{aplicada} = ma_x$.</p><p><strong>Cálculo:</strong> $60 \\, N = (20 \\, kg) \\cdot a_x \\implies a_x = \\frac{60}{20} = 3 \\, m/s^2$.</p></div></div>
        <div class="solved-exercise"><h4>3. Fuerza Normal en un Ascensor</h4><p class="enunciado">Una persona de 70 kg está en un ascensor que acelera hacia arriba a 2 m/s². ¿Cuál es la fuerza Normal que el piso ejerce sobre ella?</p><button class="btn btn-solution" data-solution-id="sol-3">Ver Solución</button><div id="sol-3" class="solution-content"><h4>Solución</h4><p><strong>DCL:</strong> Fuerza Normal $\\vec{N}$ hacia arriba, Peso $\\vec{P}$ hacia abajo. La aceleración $\\vec{a}$ es hacia arriba.</p><p><strong>2ª Ley (Eje Y):</strong> $\\sum F_y = N - P = ma_y$.</p><p><strong>Cálculo:</strong> $P = 70 \\cdot 9.8 = 686 \\, N$.</p><p>$N - 686 \\, N = (70 \\, kg) \\cdot (2 \\, m/s^2) \\implies N - 686 = 140 \\implies N = 826 \\, N$. La persona se siente "más pesada".</p></div></div>
        <div class="solved-exercise"><h4>4. Plano Inclinado (Sin Fricción)</h4><p class="enunciado">Un bloque de 10 kg se desliza por un plano inclinado de 30° sin fricción. Calcula su aceleración.</p><button class="btn btn-solution" data-solution-id="sol-4">Ver Solución</button><div id="sol-4" class="solution-content"><h4>Solución</h4><p><strong>DCL:</strong> Ejes alineados con el plano. La Normal es perpendicular al plano. El Peso se descompone en $P_x = mg\\sin(\\theta)$ (paralelo al plano) y $P_y = mg\\cos(\\theta)$ (perpendicular).</p><p><strong>2ª Ley (Eje X):</strong> La única fuerza que causa el movimiento es la componente x del peso. $\\sum F_x = P_x = ma_x$.</p><p>$mg\\sin(\\theta) = ma_x \\implies a_x = g\\sin(\\theta)$.</p><p><strong>Cálculo:</strong> $a_x = 9.8 \\cdot \\sin(30^\\circ) = 9.8 \\cdot 0.5 = 4.9 \\, m/s^2$.</p></div></div>
        <div class="solved-exercise"><h4>5. Fuerza con Ángulo</h4><p class="enunciado">Un bloque de 5 kg es halado por una fuerza de 40 N con un ángulo de 37° sobre la horizontal. Calcula la Fuerza Normal.</p><button class="btn btn-solution" data-solution-id="sol-5">Ver Solución</button><div id="sol-5" class="solution-content"><h4>Solución</h4><p><strong>DCL:</strong> Peso $\\vec{P}$ hacia abajo, Normal $\\vec{N}$ hacia arriba, y la fuerza aplicada $\\vec{F}$ con ángulo.</p><p><strong>Descomponer F:</strong> $F_y = F\\sin(\\theta) = 40 \\cdot \\sin(37^\\circ) \\approx 24 \\, N$.</p><p><strong>2ª Ley (Eje Y):</strong> No hay aceleración vertical ($a_y=0$). $\\sum F_y = N + F_y - P = 0$.</p><p><strong>Cálculo:</strong> $P = 5 \\cdot 9.8 = 49 \\, N$.</p><p>$N + 24 - 49 = 0 \\implies N = 25 \\, N$. La Normal es menor que el peso.</p></div></div>
        <div class="solved-exercise"><h4>6. Fricción Estática</h4><p class="enunciado">Un baúl de 50 kg no se mueve aunque se le aplica una fuerza horizontal de 100 N. ¿Cuál es la fuerza de fricción estática?</p><button class="btn btn-solution" data-solution-id="sol-6">Ver Solución</button><div id="sol-6" class="solution-content"><h4>Solución</h4><p><strong>Equilibrio (1ª Ley):</strong> Como el baúl no se mueve, está en equilibrio. $\\sum F_x = 0$.</p><p><strong>DCL:</strong> Fuerza aplicada $\\vec{F}$ a la derecha, fuerza de fricción estática $\\vec{f}_s$ a la izquierda.</p><p>$\sum F_x = F - f_s = 0 \\implies f_s = F$.</p><p><strong>Respuesta:</strong> La fuerza de fricción estática es exactamente igual a la fuerza aplicada para mantener el equilibrio: $f_s = 100 \\, N$.</p></div></div>
        <div class="solved-exercise"><h4>7. Fricción Cinética</h4><p class="enunciado">Un bloque de 8 kg se desliza con una fuerza de fricción cinética de 15 N. Si se le aplica una fuerza horizontal de 40 N, ¿cuál es su aceleración?</p><button class="btn btn-solution" data-solution-id="sol-7">Ver Solución</button><div id="sol-7" class="solution-content"><h4>Solución</h4><p><strong>DCL:</strong> Fuerza aplicada $\\vec{F}$ a la derecha, fuerza de fricción cinética $\\vec{f}_k$ a la izquierda.</p><p><strong>2ª Ley (Eje X):</strong> $\\sum F_x = F - f_k = ma_x$.</p><p><strong>Cálculo:</strong> $40 \\, N - 15 \\, N = (8 \\, kg) \\cdot a_x \\implies 25 = 8a_x \\implies a_x = 3.125 \\, m/s^2$.</p></div></div>
        <div class="solved-exercise"><h4>8. Sistema de Dos Bloques (Tensión)</h4><p class="enunciado">Dos bloques ($m_1=2kg, m_2=3kg$) están unidos por una cuerda. Se hala de $m_2$ con una fuerza de 20 N. Calcula la aceleración del sistema y la tensión.</p><button class="btn btn-solution" data-solution-id="sol-8">Ver Solución</button><div id="sol-8" class="solution-content"><h4>Solución</h4><p><strong>Paso 1 (Sistema completo):</strong> Masa total $M = 5 \\, kg$. Fuerza externa $F = 20 \\, N$.</p><p>$F = Ma \\implies 20 = 5a \\implies a = 4 \\, m/s^2$.</p><p><strong>Paso 2 (DCL de $m_1$):</strong> La única fuerza horizontal que actúa sobre $m_1$ es la Tensión $\\vec{T}$.</p><p>$\\sum F_{en \\, m1} = T = m_1 a \\implies T = (2 \\, kg)(4 \\, m/s^2) = 8 \\, N$.</p></div></div>
        <div class="solved-exercise"><h4>9. Máquina de Atwood</h4><p class="enunciado">Dos masas ($m_1=6kg, m_2=4kg$) cuelgan de una polea sin fricción. Calcula la aceleración del sistema.</p><button class="btn btn-solution" data-solution-id="sol-9">Ver Solución</button><div id="sol-9" class="solution-content"><h4>Solución</h4><p><strong>Lógica:</strong> La fuerza que mueve el sistema es la diferencia de pesos. La masa total es la que se acelera.</p><p>Fuerza Neta: $P_1 - P_2 = m_1g - m_2g = g(m_1 - m_2)$.</p><p>Masa Total: $M = m_1 + m_2$.</p><p><strong>2ª Ley (Sistema):</strong> $g(m_1 - m_2) = (m_1 + m_2)a$.</p><p>$a = g \\frac{m_1 - m_2}{m_1 + m_2} = 9.8 \\frac{6-4}{6+4} = 9.8 \\frac{2}{10} = 1.96 \\, m/s^2$.</p></div></div>
        <div class="solved-exercise"><h4>10. Acción-Reacción</h4><p class="enunciado">Un cohete expulsa gases hacia abajo para poder ascender. ¿Cuál es el par acción-reacción que impulsa al cohete?</p><button class="btn btn-solution" data-solution-id="sol-10">Ver Solución</button><div id="sol-10" class="solution-content"><h4>Solución</h4><p><strong>Acción:</strong> El cohete ejerce una fuerza hacia abajo sobre los gases expulsados.</p><p><strong>Reacción:</strong> Los gases expulsados ejercen una fuerza de igual magnitud y sentido opuesto (hacia arriba) sobre el cohete.</p><p>Es esta fuerza de reacción de los gases la que constituye el empuje que eleva al cohete, no la interacción con el aire o el suelo.</p></div></div>
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