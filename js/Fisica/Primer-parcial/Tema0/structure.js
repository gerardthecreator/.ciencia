// js/Fisica/Primer-parcial/Tema0/structure.js

import { teoria } from './Teoria.js';
import { quiz } from './Quiz.js';

/**
 * Dibuja una flecha en un contexto de canvas.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} fromx
 * @param {number} fromy
 * @param {number} tox
 * @param {number} toy
 */
function drawArrow(ctx, fromx, fromy, tox, toy) {
    const headlen = 10; // length of head in pixels
    const dx = tox - fromx;
    const dy = toy - fromy;
    const angle = Math.atan2(dy, dx);
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}

function initVisualizations() {
    // --- Visualización 1: Producto por Escalar ---
    const canvasScalar = document.getElementById('canvas-scalar-product');
    if (canvasScalar) {
        const ctx = canvasScalar.getContext('2d');
        ctx.font = '16px Oswald';
        ctx.fillStyle = '#333';
        
        // Vector Original A
        ctx.beginPath();
        ctx.strokeStyle = '#25344F';
        ctx.lineWidth = 3;
        drawArrow(ctx, 20, 75, 120, 75);
        ctx.stroke();
        // CORRECCIÓN: Usar texto plano y símbolo de flecha Unicode
        ctx.fillText('A⃗', 65, 65);

        // Vector 2A
        ctx.beginPath();
        ctx.strokeStyle = '#28a745';
        drawArrow(ctx, 150, 40, 350, 40);
        ctx.stroke();
        ctx.fillText('2A⃗', 240, 30);

        // Vector -A
        ctx.beginPath();
        ctx.strokeStyle = '#dc3545';
        drawArrow(ctx, 270, 110, 170, 110);
        ctx.stroke();
        ctx.fillText('-A⃗', 210, 130);
    }

    // --- Visualización 2: Componentes ---
    const canvasComp = document.getElementById('canvas-components');
    if (canvasComp) {
        const ctx = canvasComp.getContext('2d');
        const originX = 40, originY = 210;
        
        // Ejes
        ctx.beginPath();
        ctx.strokeStyle = '#617891';
        ctx.lineWidth = 1;
        drawArrow(ctx, originX, originY, originX, 20); // Eje Y
        drawArrow(ctx, originX, originY, 280, originY); // Eje X
        ctx.stroke();
        ctx.font = '16px Oswald';
        ctx.fillStyle = '#333';
        ctx.fillText('Y', originX - 20, 25);
        ctx.fillText('X', 270, originY + 20);

        // Vector V
        const vx = 200, vy = -120;
        ctx.beginPath();
        ctx.strokeStyle = '#D5B893';
        ctx.lineWidth = 3;
        drawArrow(ctx, originX, originY, originX + vx, originY + vy);
        ctx.stroke();
        ctx.fillText('V⃗', originX + vx - 10, originY + vy - 10);

        // Componentes y proyecciones
        ctx.beginPath();
        ctx.strokeStyle = '#6F4D38';
        ctx.lineWidth = 2;
        // Componente Vx
        drawArrow(ctx, originX, originY, originX + vx, originY);
        ctx.stroke();
        ctx.fillText('Vx', originX + vx/2 - 10, originY + 20);
        // Componente Vy
        ctx.beginPath();
        drawArrow(ctx, originX, originY, originX, originY + vy);
        ctx.stroke();
        ctx.fillText('Vy', originX - 30, originY + vy/2);
        
        // Líneas de proyección
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.moveTo(originX + vx, originY + vy);
        ctx.lineTo(originX + vx, originY);
        ctx.moveTo(originX + vx, originY + vy);
        ctx.lineTo(originX, originY + vy);
        ctx.stroke();
    }

    // --- Visualización 3: Vectores Unitarios ---
    const canvasUnit = document.getElementById('canvas-unit-vectors');
    if (canvasUnit) {
        const ctx = canvasUnit.getContext('2d');
        const originX = 30, originY = 170;

        // Ejes
        ctx.beginPath();
        ctx.strokeStyle = '#617891';
        ctx.lineWidth = 1;
        drawArrow(ctx, originX, originY, originX, 20); // Eje Y
        drawArrow(ctx, originX, originY, 230, originY); // Eje X
        ctx.stroke();
        ctx.font = 'bold 20px Oswald';
        ctx.fillStyle = '#333';

        // Vector i
        ctx.beginPath();
        ctx.strokeStyle = '#D5B893';
        ctx.lineWidth = 4;
        drawArrow(ctx, originX, originY, originX + 50, originY);
        ctx.stroke();
        // CORRECCIÓN: Usar texto plano
        ctx.fillText('î', originX + 20, originY + 25);

        // Vector j
        ctx.beginPath();
        ctx.strokeStyle = '#6F4D38';
        drawArrow(ctx, originX, originY, originX, originY - 50);
        ctx.stroke();
        ctx.fillText('ĵ', originX - 25, originY - 20);
    }
}

export const tema = {
    title: "Medidas y Vectores",
    teoria: teoria,
    parts: [], // No hay partes interactivas de canvas para este tema
    quiz: quiz,
    // La función init se llamará después de renderizar el HTML del tema
    init: initVisualizations
};