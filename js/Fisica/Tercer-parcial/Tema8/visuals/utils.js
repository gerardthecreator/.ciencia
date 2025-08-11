// js/Fisica/Tercer-parcial/Tema8/visuals/utils.js

/**
 * Dibuja una flecha en un contexto de canvas.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} fromx
 * @param {number} fromy
 * @param {number} tox
 * @param {number} toy
 * @param {string} color
 * @param {number} lw - line width
 */
export function drawArrow(ctx, fromx, fromy, tox, toy, color = '#333', lw = 2) {
 const headlen = 10;
 const dx = tox - fromx;
 const dy = toy - fromy;
 const angle = Math.atan2(dy, dx);
 ctx.save();
 ctx.strokeStyle = color;
 ctx.fillStyle = color;
 ctx.lineWidth = lw;
 ctx.beginPath();
 ctx.moveTo(fromx, fromy);
 ctx.lineTo(tox, toy);
 ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
 ctx.moveTo(tox, toy);
 ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
 ctx.stroke();
 ctx.restore();
}

/**
 * Dibuja un bloque simple con una etiqueta.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {string} label
 */
export function drawBlock(ctx, x, y, width, height, label = '') {
 ctx.save();
 ctx.fillStyle = 'rgba(37, 82, 79, 0.7)';
 ctx.strokeStyle = '#25344F';
 ctx.lineWidth = 2;
 ctx.strokeRect(x, y, width, height);
 ctx.fillRect(x, y, width, height);
 if (label) {
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 14px Oswald';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, x + width / 2, y + height / 2);
 }
 ctx.restore();
}