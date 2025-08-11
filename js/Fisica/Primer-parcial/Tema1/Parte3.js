// js/Fisica/Primer-parcial/Tema1/Parte3.js

export const parte3 = {
 getHTML: () => `
        <section class="topic-section">
            <h3>Parte 3: Simulación de Caída Libre</h3>
            <p>Presiona "Lanzar" para ver una simulación de un objeto en caída libre. Observa cómo la gravedad afecta su movimiento. La simulación se reinicia automáticamente.</p>
            <div class="controls">
                <button id="freefall-btn" class="btn">Lanzar Objeto</button>
            </div>
            <canvas id="freefall-canvas" class="interactive-canvas" width="300" height="400"></canvas>
        </section>
    `,
 init: () => {
  const btn = document.getElementById('freefall-btn');
  const canvas = document.getElementById('freefall-canvas');
  if (!btn || !canvas) return;
  
  const ctx = canvas.getContext('2d');
  const g = 0.2; // Gravedad para la simulación (pixels/frame^2)
  let animationId = null;
  
  let ball = {
   x: canvas.width / 2,
   y: 30,
   vy: 0,
   radius: 15,
   color: '#6F4D38'
  };
  
  const draw = () => {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.fillStyle = '#EFE2CF';
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   
   // Dibuja la pelota
   ctx.beginPath();
   ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
   ctx.fillStyle = ball.color;
   ctx.fill();
   ctx.closePath();
  };
  
  const update = () => {
   // Aplicar gravedad
   ball.vy += g;
   ball.y += ball.vy;
   
   // Reiniciar si toca el suelo
   if (ball.y + ball.radius > canvas.height) {
    ball.y = 30;
    ball.vy = 0;
    cancelAnimationFrame(animationId);
    btn.disabled = false;
    btn.textContent = "Lanzar de Nuevo";
    draw(); // Dibuja en la posición inicial
    return;
   }
   
   draw();
   animationId = requestAnimationFrame(update);
  };
  
  btn.addEventListener('click', () => {
   if (animationId) {
    cancelAnimationFrame(animationId);
   }
   // Reiniciar estado
   ball.y = 30;
   ball.vy = 0;
   btn.disabled = true;
   btn.textContent = "En Caída...";
   update();
  });
  
  draw(); // Dibujo inicial
 }
};