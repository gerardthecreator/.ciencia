// js/Fisica/Tercer-parcial/Tema8/structure.js

import { showModal } from '../../../ui/modal.js';
import { library } from './visuals/library.js';

const exercises = [
 { enunciado: "Un jardinero empuja un cortacésped de 20 kg con una fuerza de 100 N a 30° bajo la horizontal, por 25 metros. Calcula el trabajo realizado.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Solo la componente de la fuerza paralela al desplazamiento realiza trabajo. Usamos $W = Fd\\cos(\\theta)$.</p><p><strong>Cálculo:</strong> El ángulo entre la fuerza (hacia abajo) y el desplazamiento (horizontal) es 30°. $W = (100 \\, N)(25 \\, m)\\cos(30^\\circ) \\approx 2500 \\cdot 0.866 = 2165 \\, J$.</p>" },
 { enunciado: "Un bloque de 5 kg se desliza 4m a la derecha. Una persona aplica 10 N a la izquierda. Calcula el trabajo de la persona, de la gravedad y de la normal.", solucion: "<h4>Solución</h4><p><strong>a) Trabajo de la persona:</strong> La fuerza es opuesta al desplazamiento ($\\theta=180^\\circ$). $W_p = Fd\\cos(180^\\circ) = (10)(4)(-1) = -40 \\, J$.</p><p><strong>b) Trabajo de la gravedad:</strong> La gravedad es perpendicular al desplazamiento ($\\theta=90^\\circ$). $W_g = 0 \\, J$.</p><p><strong>c) Trabajo de la normal:</strong> La normal es perpendicular al desplazamiento ($\\theta=90^\\circ$). $W_N = 0 \\, J$.</p>" },
 { enunciado: "Un coche de 1200 kg acelera de 10 m/s a 20 m/s. Calcula la energía cinética inicial, final y el trabajo neto.", solucion: "<h4>Solución</h4><p><strong>K inicial:</strong> $K_i = \\frac{1}{2}mv_i^2 = \\frac{1}{2}(1200)(10)^2 = 60,000 \\, J = 60 \\, kJ$.</p><p><strong>K final:</strong> $K_f = \\frac{1}{2}mv_f^2 = \\frac{1}{2}(1200)(20)^2 = 240,000 \\, J = 240 \\, kJ$.</p><p><strong>Trabajo Neto:</strong> Por el Teorema del Trabajo-Energía, $W_{neto} = \\Delta K = K_f - K_i = 240 - 60 = 180 \\, kJ$.</p>" },
 { enunciado: "Una fuerza $\\vec{F} = (5\\hat{i} - 2\\hat{j})\\,N$ actúa sobre un objeto con desplazamiento $\\Delta\\vec{r} = (4\\hat{i} + 3\\hat{j})\\,m$. Calcula el trabajo.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Usamos la definición de trabajo como producto escalar: $W = \\vec{F} \\cdot \\Delta\\vec{r} = F_x d_x + F_y d_y$.</p><p><strong>Cálculo:</strong> $W = (5)(4) + (-2)(3) = 20 - 6 = 14 \\, J$.</p>" },
 { enunciado: "Un bloque de 4 kg, en reposo, es empujado 3m por una fuerza de 12 N (sin fricción). Usa el teorema W-K para hallar su velocidad final.", solucion: "<h4>Solución</h4><p><strong>Trabajo Neto:</strong> La única fuerza que hace trabajo es la de 12 N. $W_{neto} = Fd = (12 \\, N)(3 \\, m) = 36 \\, J$.</p><p><strong>Teorema W-K:</strong> $W_{neto} = \\Delta K = K_f - K_i$. Como parte del reposo, $K_i=0$.</p><p>$36 = \\frac{1}{2}mv_f^2 = \\frac{1}{2}(4)v_f^2 = 2v_f^2$.</p><p>$v_f^2 = 18 \\implies v_f = \\sqrt{18} \\approx 4.24 \\, m/s$.</p>" },
 { enunciado: "Un muelle (k=200 N/m) se estira. a) ¿Trabajo para estirarlo hasta 0.1m? b) ¿Trabajo adicional para estirarlo de 0.1m a 0.2m?", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> El trabajo para estirar un muelle es $W = \\frac{1}{2}kx^2$.</p><p><strong>a) De 0 a 0.1m:</strong> $W_1 = \\frac{1}{2}(200)(0.1)^2 = 1 \\, J$.</p><p><strong>b) Trabajo total de 0 a 0.2m:</strong> $W_{total} = \\frac{1}{2}(200)(0.2)^2 = 4 \\, J$.</p><p><strong>Trabajo adicional:</strong> $W_{adicional} = W_{total} - W_1 = 4 - 1 = 3 \\, J$.</p>" },
 { enunciado: "Una fuerza varía como un triángulo: de F=0 en x=0 a F=50N en x=4m. Calcula el trabajo total.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> El trabajo realizado por una fuerza variable es el área bajo la curva de la gráfica F vs x.</p><p><strong>Cálculo:</strong> El área de un triángulo es (base * altura) / 2.</p><p>$W = \\frac{(4 \\, m)(50 \\, N)}{2} = 100 \\, J$.</p>" },
 { enunciado: "Una fuerza es $F(x) = 3x^2 + 2x$. Calcula el trabajo de x=1m a x=3m.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Para una fuerza variable dada por una función, el trabajo se calcula con una integral definida.</p><p><strong>Cálculo:</strong> $W = \\int_{1}^{3} (3x^2 + 2x) \\,dx = [x^3 + x^2]_{1}^{3}$.</p><p>$W = (3^3 + 3^2) - (1^3 + 1^2) = (27+9) - (1+1) = 36 - 2 = 34 \\, J$.</p>" },
 { enunciado: "Un motor levanta una cabina de 1000 kg a 2 m/s constantes. Calcula la fuerza y la potencia del motor.", solucion: "<h4>Solución</h4><p><strong>Fuerza:</strong> A velocidad constante, la fuerza del motor debe igualar al peso. $F = mg = 1000 \\cdot 9.8 = 9800 \\, N$.</p><p><strong>Potencia:</strong> Para una fuerza constante, $P = Fv$.</p><p>$P = (9800 \\, N)(2 \\, m/s) = 19600 \\, W = 19.6 \\, kW$.</p><p>En HP: $19600 \\, W \\times \\frac{1 \\, HP}{746 \\, W} \\approx 26.3 \\, HP$.</p>" },
 { enunciado: "Cajón de 40kg halado 10m por 200N a 37° (μₖ=0.2). Calcula W_F, W_fric, W_neto y v_f.", solucion: "<h4>Solución</h4><p><strong>a) W_F:</strong> $W_F = Fd\\cos(37^\\circ) = 200 \\cdot 10 \\cdot 0.8 = 1600 \\, J$.</p><p><strong>b) W_fric:</strong> Primero, la Normal. $N + F\\sin(37^\\circ) - mg = 0 \\implies N = 40(9.8) - 200(0.6) = 392 - 120 = 272 \\, N$.</p><p>$f_k = \\mu_k N = 0.2 \\cdot 272 = 54.4 \\, N$.</p><p>$W_{fric} = f_k d \\cos(180^\\circ) = 54.4 \\cdot 10 \\cdot (-1) = -544 \\, J$.</p><p><strong>c) W_neto:</strong> $W_{neto} = W_F + W_{fric} = 1600 - 544 = 1056 \\, J$. (W_g y W_N son cero).</p><p><strong>d) v_f:</strong> $W_{neto} = \\Delta K = \\frac{1}{2}mv_f^2 \\implies 1056 = \\frac{1}{2}(40)v_f^2 \\implies v_f = \\sqrt{1056/20} \\approx 7.27 \\, m/s$.</p>" },
 { enunciado: "Esquiador de 70kg parte del reposo en pendiente de 100m y 30°. μₖ=0.1. Halla v_f con W-K.", solucion: "<h4>Solución</h4><p><strong>Trabajo de la Gravedad:</strong> $W_g = mg h = mg(L\\sin\\theta) = 70 \\cdot 9.8 \\cdot (100 \\cdot \\sin 30^\\circ) = 34300 \\, J$.</p><p><strong>Trabajo de la Fricción:</strong> $N = mg\\cos\\theta = 70 \\cdot 9.8 \\cdot \\cos 30^\\circ \\approx 594 \\, N$.</p><p>$f_k = \\mu_k N = 0.1 \\cdot 594 = 59.4 \\, N$.</p><p>$W_{fric} = -f_k L = -59.4 \\cdot 100 = -5940 \\, J$.</p><p><strong>Teorema W-K:</strong> $W_{neto} = W_g + W_{fric} = \\Delta K = \\frac{1}{2}mv_f^2$.</p><p>$34300 - 5940 = \\frac{1}{2}(70)v_f^2 \\implies 28360 = 35v_f^2 \\implies v_f = \\sqrt{28360/35} \\approx 28.5 \\, m/s$.</p>" },
 { enunciado: "Coche de 1500kg a 25m/s frena hasta detenerse (μₖ=0.8). Halla la distancia de frenado con W-K.", solucion: "<h4>Solución</h4><p><strong>Estado Inicial:</strong> $K_i = \\frac{1}{2}(1500)(25)^2 = 468750 \\, J$.</p><p><strong>Estado Final:</strong> $K_f = 0$.</p><p><strong>Trabajo Neto:</strong> La única fuerza que hace trabajo es la fricción. $W_{neto} = W_{fric} = -f_k d = -(\\mu_k N)d = -(\\mu_k mg)d$.</p><p><strong>Teorema W-K:</strong> $W_{neto} = K_f - K_i \\implies -\\mu_k mgd = 0 - K_i$.</p><p>$d = \\frac{K_i}{\\mu_k mg} = \\frac{468750}{0.8 \\cdot 1500 \\cdot 9.8} \\approx 39.8 \\, m$.</p>" },
 { enunciado: "Péndulo de 2kg y 3m se suelta desde 60°. Halla W_g, W_T y v en el punto más bajo.", solucion: "<h4>Solución</h4><p><strong>a) W_g:</strong> El trabajo de la gravedad solo depende del cambio de altura $h$. $h = L - L\\cos\\theta = 3 - 3\\cos 60^\\circ = 1.5 \\, m$.</p><p>$W_g = mgh = 2 \\cdot 9.8 \\cdot 1.5 = 29.4 \\, J$.</p><p><strong>b) W_T:</strong> La tensión es siempre perpendicular al desplazamiento. Por lo tanto, $W_T = 0 \\, J$.</p><p><strong>c) v en el punto bajo:</strong> $W_{neto} = W_g = \\Delta K = \\frac{1}{2}mv_f^2$.</p><p>$29.4 = \\frac{1}{2}(2)v_f^2 \\implies v_f = \\sqrt{29.4} \\approx 5.42 \\, m/s$.</p>" },
 { enunciado: "Satélite de 500kg en órbita circular. ¿Trabajo de la gravedad en una órbita completa?", solucion: "<h4>Solución</h4><p><strong>Razonamiento 1 (Perpendicularidad):</strong> La fuerza de la gravedad siempre apunta hacia el centro de la Tierra, mientras que el vector de desplazamiento instantáneo es siempre tangente a la órbita. Por lo tanto, la fuerza y el desplazamiento son siempre perpendiculares ($\\theta=90^\\circ$). El trabajo en cada punto es cero, y el trabajo total es <strong>0 J</strong>.</p><p><strong>Razonamiento 2 (Desplazamiento):</strong> Después de una órbita completa, el desplazamiento neto del satélite es cero. Como el trabajo de la gravedad (una fuerza conservativa) solo depende del desplazamiento neto, el trabajo es <strong>0 J</strong>.</p>" },
 { enunciado: "Sistema de dos bloques (m₁=2, m₂=3) y muelle. F=10N se aplica a m₁. m₁ se mueve 0.5m, CM se mueve 0.3m. Halla W_ext y ΔK_cm.", solucion: "<h4>Solución</h4><p><strong>a) W_ext:</strong> El trabajo externo es el realizado por la fuerza de 10N sobre el objeto al que se aplica (m₁). $W_{ext} = F \\cdot d_1 = (10 \\, N)(0.5 \\, m) = 5 \\, J$.</p><p><strong>b) ΔK_cm:</strong> El teorema del trabajo-energía para el CM dice que el trabajo de las fuerzas externas es igual al cambio de energía cinética del CM. Sin embargo, el trabajo se calcula usando el desplazamiento del punto de aplicación de la fuerza, no el del CM. Para encontrar ΔK_cm, necesitaríamos más información. El teorema es $W_{neto, ext} = \\Delta K_{CM}$.</p>" },
 { enunciado: "Bloque de 10kg lanzado a 15m/s por plano inclinado (37°, μₖ=0.25). Halla distancia máxima y v de regreso.", solucion: "<h4>Solución</h4><p><strong>a) Distancia máxima (d):</strong> $W_{neto} = \\Delta K$. Las fuerzas que hacen trabajo son la gravedad y la fricción, ambas negativas. $K_f=0$.</p><p>$W_g = -mgh = -mg(d\\sin 37^\\circ)$. $W_{fric} = -f_k d = -(\\mu_k N)d = -(\\mu_k mg\\cos 37^\\circ)d$.</p><p>$-mgd(\\sin 37^\\circ + \\mu_k\\cos 37^\\circ) = 0 - \\frac{1}{2}mv_i^2$.</p><p>$d = \\frac{v_i^2}{2g(\\sin 37^\\circ + \\mu_k\\cos 37^\\circ)} = \\frac{15^2}{2(9.8)(0.6 + 0.25 \\cdot 0.8)} \\approx 14.4 \\, m$.</p><p><strong>b) Velocidad de regreso:</strong> Ahora la gravedad hace trabajo positivo y la fricción negativo. $W_{neto} = W_g + W_{fric} = \\Delta K$.</p><p>$mgd\\sin 37^\\circ - f_k d = \\frac{1}{2}mv_f^2 - 0$.</p><p>$10(9.8)(14.4)(0.6) - (0.25 \\cdot 10 \\cdot 9.8 \\cdot 0.8)(14.4) = \\frac{1}{2}(10)v_f^2$.</p><p>$846.7 - 282.2 = 5v_f^2 \\implies v_f = \\sqrt{564.5/5} \\approx 10.6 \\, m/s$.</p>" },
 { enunciado: "Fuerza $\\vec{F} = (2y\\hat{i} + 3x\\hat{j})$. Calcula el trabajo de (0,0) a (2,4).", solucion: "<h4>Solución</h4><p><strong>Parametrización:</strong> La línea recta es $y=2x$, por lo que $dy=2dx$. $d\\vec{r} = dx\\hat{i} + dy\\hat{j} = dx\\hat{i} + 2dx\\hat{j}$.</p><p><strong>Integral de Línea:</strong> $W = \\int \\vec{F} \\cdot d\\vec{r} = \\int (2y\\hat{i} + 3x\\hat{j}) \\cdot (dx\\hat{i} + 2dx\\hat{j})$.</p><p>$W = \\int_{x=0}^{x=2} (2y \\,dx + 6x \\,dx)$. Sustituimos $y=2x$.</p><p>$W = \\int_{0}^{2} (2(2x) + 6x) \\,dx = \\int_{0}^{2} 10x \\,dx = [5x^2]_0^2 = 5(2)^2 - 0 = 20 \\, J$.</p>" },
 { enunciado: "Coche de 1000kg acelera desde reposo con potencia neta constante P=20kW. ¿Tiempo para alcanzar 30m/s?", solucion: "<h4>Solución</h4><p><strong>Relación:</strong> $P = dW/dt$. Por el teorema W-K, $W = K = \\frac{1}{2}mv^2$.</p><p>$P = \\frac{d}{dt}(\\frac{1}{2}mv^2) = \\frac{1}{2}m(2v \\frac{dv}{dt}) = mva$.</p><p><strong>Integración:</strong> $P = dK/dt \\implies \\int P \\,dt = \\int dK \\implies Pt = \\Delta K$.</p><p><strong>Cálculo:</strong> $K_f = \\frac{1}{2}(1000)(30)^2 = 450000 \\, J$.</p><p>$t = \\Delta K / P = 450000 / 20000 = 22.5 \\, s$.</p>" },
 { enunciado: "Bloque en rampa sin fricción que termina en loop (R=10m). a) Altura mínima h para completar el loop. b) N en el punto más bajo.", solucion: "<h4>Solución</h4><p><strong>a) Altura mínima:</strong> Para completar el loop, la velocidad en la cima debe ser tal que la fuerza normal sea al menos cero. $N+mg = mv_{cima}^2/R$. Con $N=0$, $v_{cima} = \\sqrt{gR}$.</p><p>Por conservación de energía (que veremos después, pero se deriva de W-K): $mgh = mg(2R) + \\frac{1}{2}mv_{cima}^2$.</p><p>$mgh = 2mgR + \\frac{1}{2}mgR \\implies h = 2.5R = 2.5(10) = 25 \\, m$.</p><p><strong>b) N en el fondo:</strong> $v_{fondo}^2 = v_0^2 + 2gh = 2g(2.5R) = 5gR$.</p><p>$\\sum F = N - mg = mv_{fondo}^2/R = m(5gR)/R = 5mg$.</p><p>$N = mg + 5mg = 6mg$.</p>" },
 { enunciado: "Bloque de 5kg en reposo contra muelle comprimido (k=400N/m, x=0.2m). Se suelta, recorre 1m con μₖ=0.2 y sube por un plano. Halla v_muelle, v_fricción y h_max.", solucion: "<h4>Solución</h4><p><strong>a) Energía del muelle:</strong> $W_{muelle} = \\frac{1}{2}kx^2 = \\frac{1}{2}(400)(0.2)^2 = 8 \\, J$.</p><p><strong>b) v al separarse:</strong> El trabajo del muelle se convierte en K. $8 = \\frac{1}{2}(5)v^2 \\implies v = \\sqrt{16/5} \\approx 1.79 \\, m/s$.</p><p><strong>c) v tras fricción:</strong> $W_{neto} = W_{fric} = \\Delta K$. $W_{fric} = -\\mu_k mgd = -0.2(5)(9.8)(1) = -9.8 \\, J$.</p><p>$\Delta K = K_f - K_i = -9.8 \\implies \\frac{1}{2}(5)v_f^2 - 8 = -9.8$. ¡El trabajo de la fricción es mayor que la energía inicial! El bloque se detiene en la zona de fricción.</p><p><strong>d) h_max:</strong> El bloque no llega al plano inclinado. Se detiene antes.</p>" }
];

export const tema = {
 title: "Ejercicios de Trabajo y Energía",
 getHTML: () => {
  let html = '';
  exercises.forEach((ex, index) => {
   const i = index + 1;
   html += `
                <div class="solved-exercise-visual">
                    <div class="exercise-content">
                        <h4>Ejercicio ${i}</h4>
                        <p class="enunciado">${ex.enunciado}</p>
                        <button class="btn btn-solution" data-solution-id="sol-trabajo-${i}">Ver Solución y Diagrama</button>
                        <div id="sol-trabajo-${i}" class="solution-content">${ex.solucion}</div>
                    </div>
                    <div class="exercise-canvas-container">
                        <canvas id="canvas-ex-${i}" class="exercise-canvas" width="300" height="250"></canvas>
                    </div>
                </div>
            `;
  });
  return html;
 },
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
  
  document.querySelectorAll('.exercise-canvas').forEach(canvas => {
   const ctx = canvas.getContext('2d');
   ctx.font = 'bold 14px Oswald';
   ctx.fillStyle = '#333';
   ctx.textAlign = 'center';
   ctx.textBaseline = 'middle';
   
   const exerciseId = canvas.id.replace('canvas-ex-', '');
   const functionName = `drawEx${exerciseId}`;
   
   if (library[functionName]) {
    library[functionName](ctx);
   } else {
    ctx.fillText('Diagrama no implementado', 150, 125);
   }
  });
 }
};