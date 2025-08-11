// js/Quimica/Primer-parcial/Auto-Parcial/structure.js

import { showModal } from '../../../ui/modal.js';

// --- DATOS DEL AUTO-PARCIAL DE QUÍMICA ---
// Preguntas de práctica basadas en el parcial real.
const examData = [
    {
        id: 'q1',
        question: "Un trabajador empuja una caja de 80 kg una distancia de 15 m sobre una superficie horizontal, aplicando una fuerza constante de 200 N en la dirección del movimiento. ¿Cuál es el trabajo realizado por el trabajador sobre la caja?",
        options: { a: "1200 J", b: "3000 J", c: "11760 J", d: "200 J" },
        correctAnswer: 'b',
        feedback: "El trabajo es $W = F \\cdot d \\cdot \\cos(\\theta)$. Como la fuerza está en la dirección del movimiento, $\\theta=0^\\circ$. $W = (200 \\, N)(15 \\, m) = 3000 \\, J$."
    },
    {
        id: 'q2',
        question: "Un ascensor de 1500 kg acelera desde el reposo hasta una velocidad de 10 m/s. ¿Cuál es el cambio en su energía cinética?",
        options: { a: "15000 J", b: "75000 J", c: "150000 J", d: "7500 J" },
        correctAnswer: 'b',
        feedback: "El cambio en energía cinética es $\\Delta K = K_f - K_i$. Como parte del reposo, $K_i=0$. $K_f = \\frac{1}{2}mv^2 = \\frac{1}{2}(1500)(10)^2 = 75000 \\, J$."
    },
    {
        id: 'q3',
        question: "Un motor tiene una potencia de 5 kW. Si el motor debe levantar un objeto de 100 kg una distancia de 20 m con velocidad constante, ¿cuánto tiempo tardará? Use $g = 9,8 \\, m/s^2$.",
        options: { a: "3.92 s", b: "0.4 s", c: "2.5 s", d: "4.08 s" },
        correctAnswer: 'a',
        feedback: "Trabajo $W = mgh = 100 \\cdot 9.8 \\cdot 20 = 19600 \\, J$. Potencia $P = 5 \\, kW = 5000 \\, W$. El tiempo se calcula como $t = W/P = 19600 / 5000 = 3.92 \\, s$."
    },
    {
        id: 'q4',
        question: "Un bloque de 4,0 kg, inicialmente en reposo, se desliza 5,0 m por una pendiente de 30°. El coeficiente de fricción cinética es 0,20. ¿Cuál es el trabajo realizado por la fuerza de fricción? Use $g = 9,8 \\, m/s^2$.",
        options: { a: "-33.9 J", b: "-98.0 J", c: "-19.6 J", d: "-6.8 J" },
        correctAnswer: 'a',
        feedback: "Primero, la Fuerza Normal es $N = mg\\cos(30^\\circ) = 4 \\cdot 9.8 \\cdot 0.866 \\approx 33.9 \\, N$. Luego, la fuerza de fricción es $f_k = \\mu_k N = 0.20 \\cdot 33.9 \\approx 6.78 \\, N$. El trabajo es negativo porque se opone al movimiento: $W_{fric} = -f_k d = -6.78 \\cdot 5.0 \\approx -33.9 \\, J$."
    },
    {
        id: 'p5',
        question: "Un bloque de masa $m = 1,5 \\text{ kg}$ es impulsado por un resorte comprimido con constante $k = 300 \\text{ N/m}$. Si la compresión máxima del resorte es de 0,10 m, ¿cuál es la velocidad del bloque justo después de ser liberado? Considere que la superficie es horizontal y sin fricción.",
        options: { a: "1.41 m/s", b: "2.00 m/s", c: "1.00 m/s", d: "4.00 m/s" },
        correctAnswer: 'a',
        feedback: "La energía potencial elástica del resorte se convierte en energía cinética. $\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$. $300 \\cdot (0.1)^2 = 1.5 \\cdot v^2 \\implies 3 = 1.5v^2 \\implies v = \\sqrt{3/1.5} = \\sqrt{2} \\approx 1.41 \\, m/s$."
    },
    {
        id: 'p6',
        question: "Una fuerza variable actúa sobre una partícula. La fuerza es de 10 N de x=0 a x=2 m, y luego disminuye linealmente a 0 N en x=4 m. Calcule el trabajo neto realizado de x=0 a x=4 m.",
        options: { a: "20 J", b: "40 J", c: "10 J", d: "30 J" },
        correctAnswer: 'd',
        feedback: "El trabajo es el área bajo la gráfica F vs x. Dividimos en dos partes. Área del rectángulo (de x=0 a x=2): $base \\times altura = 2 \\, m \\cdot 10 \\, N = 20 \\, J$. Área del triángulo (de x=2 a x=4): $\\frac{1}{2} \\cdot base \\cdot altura = \\frac{1}{2} \\cdot (2 \\, m) \\cdot (10 \\, N) = 10 \\, J$. Trabajo total = $20 J + 10 J = 30 \\, J$."
    },
    {
        id: 'p7',
        question: "Un objeto de 2 kg se deja caer desde una altura de 8 m. Al golpear el suelo, su velocidad es de 10 m/s. ¿Cuál es el trabajo realizado por la resistencia del aire?",
        options: { a: "-56.8 J", b: "-156.8 J", c: "-100 J", d: "56.8 J" },
        correctAnswer: 'a',
        feedback: "Usamos el Teorema del Trabajo-Energía: $W_{neto} = \\Delta K$. El trabajo neto es la suma del trabajo de la gravedad y el del aire: $W_{neto} = W_g + W_{aire}$.</p><p>$\Delta K = K_f - K_i = \\frac{1}{2}(2)(10)^2 - 0 = 100 \\, J$.</p><p>$W_g = mgh = 2 \\cdot 9.8 \\cdot 8 = 156.8 \\, J$.</p><p>Sustituyendo: $156.8 + W_{aire} = 100 \\implies W_{aire} = 100 - 156.8 = -56.8 \\, J$."
    }
];

export const tema = {
    title: "Auto-Parcial de Química (Primer Parcial)",
    getHTML: () => {
        let questionsHTML = '';
        examData.forEach((q, index) => {
            questionsHTML += `
                <div class="quiz-question" id="${q.id}">
                    <p><strong>Pregunta ${index + 1}:</strong> ${q.question}</p>
                    <div class="quiz-options">
                        <label><input type="radio" name="${q.id}" value="a"> ${q.options.a}</label>
                        <label><input type="radio" name="${q.id}" value="b"> ${q.options.b}</label>
                        <label><input type="radio" name="${q.id}" value="c"> ${q.options.c}</label>
                        <label><input type="radio" name="${q.id}" value="d"> ${q.options.d}</label>
                    </div>
                </div>
            `;
        });

        return `
            <section class="auto-exam-container">
                <h2>¡A Practicar!</h2>
                <p>Este es un parcial de práctica para que pongas a prueba tus conocimientos de Química I. Tienes <strong>60 minutos</strong>. ¡Mucha suerte, panita!</p>
                <div class="quiz-timer">Tiempo restante: <span id="timer">60:00</span></div>
                <form id="auto-exam-form">
                    ${questionsHTML}
                    <button type="submit" class="btn">Finalizar y Calificar Parcial</button>
                </form>
                <div id="quiz-results"></div>
            </section>
        `;
    },
    init: () => {
        const form = document.getElementById('auto-exam-form');
        const timerEl = document.getElementById('timer');
        const resultsEl = document.getElementById('quiz-results');
        if (!form || !timerEl || !resultsEl) return;

        let timerInterval;

        function startTimer() {
            let duration = 60 * 60; // 60 minutos
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

        function evaluateExam() {
            clearInterval(timerInterval);
            let score = 0;
            let feedbackHTML = '';

            examData.forEach((q, index) => {
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

            const percentage = Math.round((score / examData.length) * 100);
            const summaryHTML = `<div class="results-summary">Resultado Final: ${percentage}% (${score} de ${examData.length} correctas)</div>`;
            resultsEl.innerHTML = summaryHTML + feedbackHTML;
            form.querySelectorAll('input, button').forEach(el => el.disabled = true);
            
            MathJax.typesetPromise([resultsEl]);
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            evaluateExam();
            resultsEl.scrollIntoView({ behavior: 'smooth' });
        });

        startTimer();
    }
};