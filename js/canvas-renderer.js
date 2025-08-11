// js/canvas-renderer.js

/**
 * Dibuja los ejes X e Y en un canvas.
 * @param {CanvasRenderingContext2D} ctx - El contexto 2D del canvas.
 * @param {HTMLCanvasElement} canvas - El elemento canvas.
 * @param {object} options - Opciones de dibujado { padding }
 */
export function drawAxes(ctx, canvas, options = { padding: 20 }) {
 const { padding } = options;
 ctx.beginPath();
 ctx.strokeStyle = '#333';
 ctx.lineWidth = 1;
 
 // Eje Y
 ctx.moveTo(padding, 0);
 ctx.lineTo(padding, canvas.height);
 
 // Eje X
 ctx.moveTo(0, canvas.height - padding);
 ctx.lineTo(canvas.width, canvas.height - padding);
 
 ctx.stroke();
}

// En un futuro, aquí podrían ir funciones como:
// - drawGrid(ctx, canvas, spacing)
// - plotData(ctx, data, scale)
// - etc.