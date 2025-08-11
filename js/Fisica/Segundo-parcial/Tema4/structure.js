// js/Fisica/Segundo-parcial/Tema4/structure.js

import { showModal } from '../../../ui/modal.js';
import { dclLibrary } from './dcl-visuals/dcl-library.js';

// --- DATOS DE LOS EJERCICIOS ---
// Cada objeto contiene el enunciado y la solución para un ejercicio.
// Esta data se usa para generar el HTML dinámicamente.
const exercises = [
 { enunciado: "Un transbordador espacial apaga sus motores en el vacío. ¿Qué le sucede?", solucion: "<h4>Solución (Conceptual)</h4><p><strong>Porqué y Para qué:</strong> Esta pregunta ataca la intuición errónea de Aristóteles. La 1ª Ley de Newton nos dice que el estado natural no es el reposo, sino el movimiento a velocidad constante. En el vacío no hay fricción.</p><p><strong>Respuesta:</strong> (b) Sigue moviéndose a velocidad constante en línea recta. Su inercia lo mantiene en movimiento.</p>" },
 { enunciado: "Una lámpara de 2 kg cuelga del techo. Dibuja el DCL y calcula la tensión.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> El objeto está en equilibrio, por lo que la suma de fuerzas es cero. La tensión del cable debe cancelar exactamente la fuerza de la gravedad (peso).</p><p><strong>Cálculo:</strong> $\\sum F_y = T - P = 0 \\implies T = P = mg = (2 \\, kg)(9.8 \\, m/s^2) = 19.6 \\, N$.</p>" },
 { enunciado: "Un cuadro de 5 kg cuelga de dos cables, cada uno a 45° con la vertical. Calcula la tensión en cada cable.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Las componentes verticales de ambas tensiones deben sumar para soportar el peso. Por simetría, ambas tensiones son iguales.</p><p><strong>Cálculo:</strong> $\\sum F_y = T_1\\cos(45^\\circ) + T_2\\cos(45^\\circ) - P = 0$. Como $T_1=T_2=T$, tenemos $2T\\cos(45^\\circ) = mg$.</p><p>$2T(0.707) = 5 \\cdot 9.8 = 49 \\implies T = \\frac{49}{1.414} \\approx 34.6 \\, N$.</p>" },
 { enunciado: "Un niño de 30 kg está de pie en un ascensor en reposo. Calcula la fuerza normal.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> En reposo, el sistema está en equilibrio. La fuerza normal del suelo debe ser igual y opuesta al peso del niño para que la fuerza neta sea cero.</p><p><strong>Cálculo:</strong> $\\sum F_y = N - P = 0 \\implies N = P = mg = (30 \\, kg)(9.8 \\, m/s^2) = 294 \\, N$.</p>" },
 { enunciado: "Un bloque de 10 kg sin fricción es empujado por 40 N horizontalmente. Calcula la aceleración y la normal.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Hay una fuerza neta en la dirección horizontal, lo que causa una aceleración según la 2ª Ley. Verticalmente, sigue en equilibrio.</p><p><strong>Cálculo X:</strong> $\\sum F_x = 40 \\, N = ma_x = (10 \\, kg)a_x \\implies a_x = 4 \\, m/s^2$.</p><p><strong>Cálculo Y:</strong> $\\sum F_y = N - P = 0 \\implies N = P = 10 \\cdot 9.8 = 98 \\, N$.</p>" },
 { enunciado: "Un trineo de 20 kg es halado por 100 N a 37° sobre la horizontal (sin fricción). Calcula la normal y la aceleración.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> La fuerza aplicada tiene una componente vertical que 'ayuda' a levantar el trineo, reduciendo la fuerza normal. La componente horizontal es la que causa la aceleración.</p><p><strong>Descomposición:</strong> $F_x = 100\\cos(37^\\circ) \\approx 80 \\, N$. $F_y = 100\\sin(37^\\circ) \\approx 60 \\, N$.</p><p><strong>Cálculo Y (Normal):</strong> $\\sum F_y = N + F_y - P = 0 \\implies N + 60 - (20 \\cdot 9.8) = 0 \\implies N = 196 - 60 = 136 \\, N$.</p><p><strong>Cálculo X (Aceleración):</strong> $\\sum F_x = F_x = ma_x \\implies 80 = 20a_x \\implies a_x = 4 \\, m/s^2$.</p>" },
 { enunciado: "Un bloque de 5 kg se desliza por un plano inclinado de 30° sin fricción. Calcula su aceleración.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> En un plano inclinado, es la componente del peso paralela al plano la que causa la aceleración. La normal cancela solo la componente perpendicular del peso.</p><p><strong>Cálculo:</strong> La fuerza neta a lo largo del plano es $F_{neta} = P_x = mg\\sin(\\theta)$.</p><p>$mg\\sin(\\theta) = ma \\implies a = g\\sin(\\theta) = 9.8 \\cdot \\sin(30^\\circ) = 4.9 \\, m/s^2$.</p>" },
 { enunciado: "El niño de 30 kg ahora está en un ascensor que acelera hacia arriba a 2 m/s². Calcula la nueva fuerza normal.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Ahora hay una aceleración neta hacia arriba. La fuerza hacia arriba (Normal) debe ser mayor que la fuerza hacia abajo (Peso) para causar esta aceleración.</p><p><strong>Cálculo:</strong> $\\sum F_y = N - P = ma \\implies N = P + ma = mg + ma = m(g+a)$.</p><p>$N = 30(9.8 + 2) = 30(11.8) = 354 \\, N$. Se siente más 'pesado'.</p>" },
 { enunciado: "Un archivador de 50 kg tiene $\\mu_s = 0.6$. ¿Cuál es la fuerza máxima para empezar a moverlo?", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> La fricción estática máxima es la fuerza que se debe vencer. Se calcula como $f_{s,max} = \\mu_s N$.</p><p><strong>Cálculo:</strong> Primero, $N = P = mg = 50 \\cdot 9.8 = 490 \\, N$.</p><p>$f_{s,max} = 0.6 \\cdot 490 \\, N = 294 \\, N$. Se necesita una fuerza de al menos 294 N.</p>" },
 { enunciado: "El archivador del ejercicio 9, con $\\mu_k = 0.4$, es empujado por 250 N. Calcula su aceleración.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> La fuerza aplicada (250 N) es menor que la fricción estática máxima (294 N). Por lo tanto, la fuerza no es suficiente para mover el archivador.</p><p><strong>Respuesta:</strong> La aceleración es $a = 0 \\, m/s^2$. La fuerza de fricción estática se iguala a la aplicada, $f_s = 250 \\, N$.</p>" },
 { enunciado: "Un esquiador de 70 kg desciende por una pendiente de 15° con $\\mu_k = 0.1$. Calcula su aceleración.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> La aceleración es el resultado de la competencia entre la componente del peso que lo empuja hacia abajo y la fricción que se opone.</p><p><strong>Cálculo:</strong> $N = mg\\cos(15^\\circ) \\approx 662.5 \\, N$.</p><p>$f_k = \\mu_k N = 0.1 \\cdot 662.5 = 66.25 \\, N$.</p><p>$\\sum F_x = mg\\sin(15^\\circ) - f_k = ma \\implies (70 \\cdot 9.8 \\cdot 0.259) - 66.25 = 70a$.</p><p>$177.5 - 66.25 = 70a \\implies 111.25 = 70a \\implies a \\approx 1.59 \\, m/s^2$.</p>" },
 { enunciado: "Dos bloques en contacto ($m_1=2kg, m_2=3kg$) son empujados por 15 N aplicados a $m_1$. Calcula la aceleración y la fuerza de contacto.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> El sistema se mueve como uno solo. Luego, analizamos un bloque para encontrar las fuerzas internas.</p><p><strong>Sistema:</strong> $F = (m_1+m_2)a \\implies 15 = (5)a \\implies a = 3 \\, m/s^2$.</p><p><strong>DCL de $m_2$:</strong> La única fuerza horizontal es la que $m_1$ le hace, $F_{12}$.</p><p>$F_{12} = m_2 a = 3 \\, kg \\cdot 3 \\, m/s^2 = 9 \\, N$.</p>" },
 { enunciado: "Máquina de Atwood con $m_1=4kg$ y $m_2=6kg$. Calcula la aceleración y la tensión.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> La fuerza neta que mueve el sistema es la diferencia de pesos. La masa total es la que se acelera.</p><p><strong>Aceleración:</strong> $a = g \\frac{m_2 - m_1}{m_1 + m_2} = 9.8 \\frac{6-4}{6+4} = 9.8 \\frac{2}{10} = 1.96 \\, m/s^2$.</p><p><strong>Tensión (DCL de $m_1$):</strong> $\\sum F_y = T - m_1g = m_1a \\implies T = m_1(g+a) = 4(9.8+1.96) = 47.04 \\, N$.</p>" },
 { enunciado: "Bloque en mesa ($m_1=5kg$) y bloque colgante ($m_2=3kg$), sin fricción. Calcula la aceleración y la tensión.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> La fuerza que mueve todo el sistema es el peso del bloque colgante ($P_2$). La masa total es la que se acelera.</p><p><strong>Sistema:</strong> $F_{neta} = P_2 = (m_1+m_2)a \\implies m_2g = (m_1+m_2)a$.</p><p>$a = g \\frac{m_2}{m_1+m_2} = 9.8 \\frac{3}{5+3} = 9.8 \\frac{3}{8} \\approx 3.675 \\, m/s^2$.</p><p><strong>Tensión (DCL de $m_1$):</strong> $T = m_1 a = 5 \\cdot 3.675 = 18.375 \\, N$.</p>" },
 { enunciado: "Tren de 3 bloques ($m_1=1, m_2=2, m_3=3kg$) halado desde $m_3$ por 30 N. Calcula las tensiones.", solucion: "<h4>Solución</h4><p><strong>Sistema:</strong> $F = (m_1+m_2+m_3)a \\implies 30 = (6)a \\implies a = 5 \\, m/s^2$.</p><p><strong>Tensión $T_{23}$ (DCL de $m_1+m_2$):</strong> $T_{23}$ hala a $m_1$ y $m_2$. $T_{23} = (m_1+m_2)a = (3) \\cdot 5 = 15 \\, N$.</p><p><strong>Tensión $T_{12}$ (DCL de $m_1$):</strong> $T_{12}$ solo hala a $m_1$. $T_{12} = m_1 a = (1) \\cdot 5 = 5 \\, N$.</p>" },
 { enunciado: "Plano inclinado (37°) con $m_1=8kg$ y polea con $m_2=10kg$ colgando. Sin fricción. Calcula la aceleración.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Es una competencia entre el peso de $m_2$ (que tira hacia abajo) y la componente del peso de $m_1$ (que tira hacia el otro lado).</p><p><strong>Fuerzas en competencia:</strong> $P_2 = 10 \\cdot 9.8 = 98 \\, N$. $P_{1x} = m_1g\\sin(37^\\circ) = 8 \\cdot 9.8 \\cdot 0.6 \\approx 47 \\, N$.</p><p>Como $P_2 > P_{1x}$, $m_2$ bajará y $m_1$ subirá por el plano.</p><p><strong>Sistema:</strong> $F_{neta} = P_2 - P_{1x} = (m_1+m_2)a$.</p><p>$98 - 47 = (18)a \\implies 51 = 18a \\implies a \\approx 2.83 \\, m/s^2$.</p>" },
 { enunciado: "Una fuerza $F(t) = 12t$ se aplica a un bloque de 3 kg. Calcula la velocidad en t=2s.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> La aceleración no es constante. Debemos integrar. $a(t) = F(t)/m = 12t/3 = 4t$.</p><p><strong>Cálculo:</strong> $v(t) = \\int a(t) dt = \\int 4t \\, dt = 2t^2 + C$. Como parte del reposo, $C=0$.</p><p>En $t=2s$: $v(2) = 2(2)^2 = 8 \\, m/s$.</p>" },
 { enunciado: "Un bloque de 4 kg cuelga de un muelle, estirándolo 0.2 m hasta el equilibrio. Calcula la constante del muelle k.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> En equilibrio, la fuerza del muelle hacia arriba ($F_m = kx$) debe ser igual al peso del bloque hacia abajo.</p><p><strong>Cálculo:</strong> $\\sum F_y = F_m - P = 0 \\implies kx = mg$.</p><p>$k(0.2) = 4 \\cdot 9.8 = 39.2 \\implies k = \\frac{39.2}{0.2} = 196 \\, N/m$.</p>" },
 { enunciado: "Un mosquito choca con un camión. ¿Qué fuerza es mayor? ¿Por qué el efecto es diferente?", solucion: "<h4>Solución</h4><p><strong>Fuerza:</strong> Por la 3ª Ley de Newton, la fuerza que el camión ejerce sobre el mosquito es <strong>exactamente igual</strong> en magnitud a la que el mosquito ejerce sobre el camión.</p><p><strong>Efecto (Aceleración):</strong> Por la 2ª Ley, $a = F/m$. Como la fuerza $F$ es la misma para ambos, pero la masa $m$ del mosquito es diminuta y la del camión es enorme, la aceleración del mosquito es gigantesca, mientras que la del camión es despreciable.</p>" },
 { enunciado: "Repite el Ejercicio 14 ($m_1=5kg$ en mesa, $m_2=3kg$ colgando) pero con $\\mu_k = 0.2$.", solucion: "<h4>Solución</h4><p><strong>Porqué:</strong> Ahora la fuerza de fricción se opone al movimiento, restando fuerza al sistema.</p><p><strong>Cálculo de Fricción:</strong> $N = P_1 = m_1g = 5 \\cdot 9.8 = 49 \\, N$.</p><p>$f_k = \\mu_k N = 0.2 \\cdot 49 = 9.8 \\, N$.</p><p><strong>Sistema:</strong> $F_{neta} = P_2 - f_k = (m_1+m_2)a$.</p><p>$(3 \\cdot 9.8) - 9.8 = (5+3)a \\implies 29.4 - 9.8 = 8a$.</p><p>$19.6 = 8a \\implies a = 2.45 \\, m/s^2$.</p>" }
];

export const tema = {
 title: "Ejercicios Prácticos de Dinámica",
 getHTML: () => {
  let html = '';
  exercises.forEach((ex, index) => {
   const i = index + 1;
   html += `
                <div class="solved-exercise-visual">
                    <div class="exercise-content">
                        <h4>Ejercicio ${i}</h4>
                        <p class="enunciado">${ex.enunciado}</p>
                        <button class="btn btn-solution" data-solution-id="sol-dinamica-${i}">Ver Solución y DCL</button>
                        <div id="sol-dinamica-${i}" class="solution-content">${ex.solucion}</div>
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
  // Configurar los listeners para los botones de solución
  document.querySelectorAll('.btn-solution').forEach(button => {
   button.addEventListener('click', () => {
    const solutionId = button.dataset.solutionId;
    const solutionContent = document.getElementById(solutionId);
    if (solutionContent) {
     showModal(solutionContent.innerHTML);
    }
   });
  });
  
  // Dibujar todos los DCL en sus respectivos canvas
  document.querySelectorAll('.exercise-canvas').forEach(canvas => {
   const ctx = canvas.getContext('2d');
   ctx.font = 'bold 14px Oswald';
   ctx.fillStyle = '#333';
   ctx.textAlign = 'center';
   
   const exerciseId = canvas.id.replace('canvas-ex-', '');
   const functionName = `drawEx${exerciseId}`;
   
   // Llamar a la función de dibujo correcta desde la biblioteca importada
   if (dclLibrary[functionName]) {
    dclLibrary[functionName](ctx);
   } else {
    ctx.fillText('DCL no implementado', 150, 125);
   }
  });
 }
};