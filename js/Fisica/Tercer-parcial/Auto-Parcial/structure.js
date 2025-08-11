// js/Fisica/Tercer-parcial/Auto-Parcial/structure.js

import { showModal } from '../../../ui/modal.js';

// --- DATOS DEL AUTO-PARCIAL ---
const examData = [
    {
        id: 'p1',
        question: "Un trabajador empuja una caja de 80 kg una distancia de 15 m sobre una superficie horizontal, aplicando una fuerza constante de 200 N en la dirección del movimiento. ¿Cuál es el trabajo realizado por el trabajador sobre la caja?",
        options: { a: "1200 J", b: "3000 J", c: "11760 J", d: "200 J" },
        correctAnswer: 'b',
        feedback: "El trabajo es $W = F \\cdot d \\cdot \\cos(\\theta)$. Como la fuerza está en la dirección del movimiento, $\\theta=0^\\circ$. $W = (200 \\, N)(15 \\, m) = 3000 \\, J$."
    },
    {
        id: 'p2',
        question: "Un ascensor de 1500 kg acelera desde el reposo hasta una velocidad de 10 m/s. ¿Cuál es el cambio en su energía cinética?",
        options: { a: "15000 J", b: "75000 J", c: "150000 J", d: "7500 J" },
        correctAnswer: 'b',
        feedback: "El cambio en energía cinética es $\\Delta K = K_f - K_i$. $K_i=0$. $K_f = \\frac{1}{2}mv^2 = \\frac{1}{2}(1500)(10)^2 = 75000 \\, J$."
    },
    {
        id: 'p3',
        question: "Un motor tiene una potencia de 5 kW. Si el motor debe levantar un objeto de 100 kg una distancia de 20 m con velocidad constante, ¿cuánto tiempo tardará? Use $g = 9,8 \\, m/s^2$.",
        options: { a: "3.92 s", b: "0.4 s", c: "2.5 s", d: "4.08 s" },
        correctAnswer: 'a',
        feedback: "Trabajo $W = mgh = 100 \\cdot 9.8 \\cdot 20 = 19600 \\, J$. Potencia $P = 5000 \\, W$. Tiempo $t = W/P = 19600 / 5000 = 3.92 \\, s$."
    },
    {
        id: 'p4',
        question: "Un bloque de 4,0 kg, en reposo, se desliza 5,0 m por una pendiente de 30°. El coeficiente de fricción cinética es 0,20. ¿Cuál es el trabajo realizado por la fuerza de fricción?",
        options: { a: "-33.9 J", b: "-98.0 J", c: "-19.6 J", d: "-6.8 J" },
        correctAnswer: 'a',
        feedback: "Primero, $N = mg\\cos(30^\\circ) = 4 \\cdot 9.8 \\cdot 0.866 \\approx 33.9 \\, N$. Luego, $f_k = \\mu_k N = 0.20 \\cdot 33.9 = 6.78 \\, N$. El trabajo es negativo: $W_{fric} = -f_k d = -6.78 \\cdot 5.0 \\approx -33.9 \\, J$."
    }, // <-- ***** LA COMA QUE FALTABA ESTABA AQUÍ *****
    {
        id: 'p5',
        question: "Un bloque de 1,5 kg es impulsado por un resorte (k=300 N/m) comprimido 0,10 m. ¿Cuál es la velocidad del bloque al ser liberado sobre una superficie sin fricción?",
        options: { a: "1.41 m/s", b: "2.00 m/s", c: "1.00 m/s", d: "4.00 m/s" },
        correctAnswer: 'a',
        feedback: "La energía potencial del resorte se convierte en energía cinética. $\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$. $300 \\cdot (0.1)^2 = 1.5 \\cdot v^2 \\implies 3 = 1.5v^2 \\implies v = \\sqrt{2} \\approx 1.41 \\, m/s$."
    },
    {
        id: 'p6',
        question: "Una fuerza es de 10 N de x=0 a x=2 m, y luego disminuye linealmente a 0 N en x=4 m. Calcule el trabajo neto de x=0 a x=4 m.",
        options: { a: "20 J", b: "40 J", c: "10 J", d: "30 J" },
        correctAnswer: 'd',
        feedback: "El trabajo es el área bajo la gráfica. Área del rectángulo (0 a 2m): $10 \\, N \\cdot 2 \\, m = 20 \\, J$. Área del triángulo (2 a 4m): $\\frac{1}{2} \\cdot (2 \\, m) \\cdot (10 \\, N) = 10 \\, J$. Trabajo total = $20 + 10 = 30 \\, J$."
    },
    {
        id: 'p7',
        question: "Un objeto de 2 kg se deja caer desde 8 m. Golpea el suelo a 10 m/s. ¿Cuál es el trabajo realizado por la resistencia del aire?",
        options: { a: "-56.8 J", b: "-156.8 J", c: "-100 J", d: "56.8 J" },
        correctAnswer: 'a',
        feedback: "Usamos el Teorema W-K: $W_{neto} = \\Delta K$. $W_{neto} = W_g + W_{aire}$. $K_f = \\frac{1}{2}(2)(10)^2 = 100 \\, J$. $K_i=0$. $W_g = mgh = 2 \\cdot 9.8 \\cdot 8 = 156.8 \\, J$. Entonces, $156.8 + W_{aire} = 100 - 0 \\implies W_{aire} = 100 - 156.8 = -56.8 \\, J$."
    }
];

export const tema = {
    title: "Auto-Parcial de Trabajo y Energía",
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
                <h2>¡Prueba Final de Física I!</h2>
                <p>Este es el último parcial de práctica. Tienes <strong>60 minutos</strong> para demostrar todo lo que has aprendido. ¡Con todo, panita!</p>
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