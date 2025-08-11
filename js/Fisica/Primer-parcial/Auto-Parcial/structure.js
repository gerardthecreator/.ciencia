// js/Fisica/Primer-parcial/Auto-Parcial/structure.js

// --- DATOS DEL AUTO-PARCIAL ---
// Preguntas basadas en el parcial real, pero con valores y escenarios cambiados para la práctica.
const examData = [
    {
        id: 'p1',
        question: "Un vector $\\vec{R}$ tiene una componente en 'x' positiva ($R_x > 0$) y una componente en 'y' negativa ($R_y < 0$). ¿En qué cuadrante se encuentra y cuál es el rango de su ángulo?",
        options: { a: "Primer Cuadrante (0° a 90°)", b: "Segundo Cuadrante (90° a 180°)", c: "Tercer Cuadrante (180° a 270°)", d: "Cuarto Cuadrante (270° a 360° o -90° a 0°)" },
        correctAnswer: 'd',
        feedback: "Correcto. Con X positiva y Y negativa, el vector se encuentra en el cuarto cuadrante."
    },
    {
        id: 'p2',
        question: "Una persona parte del reposo, acelera uniformemente durante un tiempo, y luego continúa con velocidad constante. ¿Cómo es la gráfica de posición vs. tiempo ($x-t$)?",
        options: { a: "Una línea recta con pendiente positiva.", b: "Una parábola que se convierte en una línea recta.", c: "Una línea recta que se convierte en una parábola.", d: "Una curva que se aplana." },
        correctAnswer: 'b',
        feedback: "La aceleración uniforme crea una curva parabólica ($x \\propto t^2$), y la velocidad constante crea una línea recta con pendiente positiva ($x \\propto t$)."
    },
    {
        id: 'p3',
        question: "En un movimiento de proyectiles, ¿es el vector aceleración ($\\vec{a}$) alguna vez paralelo al vector velocidad ($\\vec{v}$)?",
        options: { a: "Sí, en el punto de altura máxima.", b: "Sí, justo en el momento del lanzamiento.", c: "Sí, justo antes de impactar.", d: "No, nunca." },
        correctAnswer: 'd',
        feedback: "Nunca. La aceleración $\\vec{g}$ es siempre vertical. La velocidad siempre tiene una componente horizontal constante (distinta de cero), por lo que el vector velocidad nunca es puramente vertical para ser paralelo a $\\vec{g}$."
    },
    {
        id: 'p4',
        question: "Dados $\\vec{A} = (1\\hat{i} + 2\\hat{j})$, $\\vec{B} = (-3\\hat{i} + 4\\hat{j})$. Calcule el vector $\\vec{R} = 2\\vec{A} + \\vec{B}$.",
        options: { a: "$-\\hat{i} + 8\\hat{j}$", b: "$-\\hat{i} + 6\\hat{j}$", c: "$5\\hat{i} + 0\\hat{j}$", d: "$-5\\hat{i} + 8\\hat{j}$" },
        correctAnswer: 'a',
        feedback: "$2\\vec{A} = 2\\hat{i} + 4\\hat{j}$. Luego, $(2\\hat{i} + 4\\hat{j}) + (-3\\hat{i} + 4\\hat{j}) = (2-3)\\hat{i} + (4+4)\\hat{j} = -\\hat{i} + 8\\hat{j}$."
    },
    {
        id: 'p5',
        question: "Desde un acantilado de 100m, se deja caer una piedra (velocidad inicial cero). ¿Cuánto tiempo tarda en llegar al agua?",
        options: { a: "10.2 s", b: "2.0 s", c: "4.5 s", d: "3.2 s" },
        correctAnswer: 'c',
        feedback: "Usa $y = y_0 + v_{0y}t + \\frac{1}{2}gt^2$. Con $y=0, y_0=100, v_{0y}=0, g=-9.8$, tenemos $0 = 100 - 4.9t^2$. Despejando, $t = \\sqrt{100/4.9} \\approx 4.5 \\, s$."
    },
    {
        id: 'p6',
        question: "Se lanza un proyectil a $40 \\, m/s$ con un ángulo de $30^\\circ$. ¿Cuál es su altura máxima respecto al punto de lanzamiento?",
        options: { a: "40.8 m", b: "20.4 m", c: "81.6 m", d: "15.3 m" },
        correctAnswer: 'b',
        feedback: "$v_{0y} = 40 \\sin(30^\\circ) = 20 \\, m/s$. En la altura máxima, $v_y=0$. Usa $v_y^2 = v_{0y}^2 + 2g\\Delta y \\implies 0 = 20^2 + 2(-9.8)h_{max}$. Despejando, $h_{max} = 400/19.6 \\approx 20.4 \\, m$."
    },
    {
        id: 'p7',
        question: "Un bote cruza un río (que fluye a 3 m/s) apuntando directamente a la orilla opuesta a 4 m/s. ¿Cuál es la velocidad del bote respecto a la orilla?",
        options: { a: "7 m/s", b: "1 m/s", c: "5 m/s", d: "25 m/s" },
        correctAnswer: 'c',
        feedback: "Las velocidades son perpendiculares. La velocidad resultante se encuentra con Pitágoras: $|v| = \\sqrt{v_{bote}^2 + v_{rio}^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16+9} = \\sqrt{25} = 5 \\, m/s$."
    }
];

export const tema = {
    title: "Auto-Parcial de Práctica",
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
                <p>Este es un parcial de práctica para que pongas a prueba tus conocimientos. Tienes <strong>60 minutos</strong>. ¡Mucha suerte, panita!</p>
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
            
            // Renderizar MathJax en el feedback
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