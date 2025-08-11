// js/Quimica/Primer-parcial/Tema4/structure.js

import { teoria } from './Teoria.js';
import { quiz } from './Quiz.js';

/**
 * Función que se ejecuta para dibujar el canvas de las tendencias periódicas.
 */
function initVisualizations() {
    const canvasTrends = document.getElementById('canvas-periodic-trends');
    if (canvasTrends) {
        const ctx = canvasTrends.getContext('2d');
        
        // Función de ayuda para dibujar flechas con texto
        const drawTrendArrow = (text, fromX, fromY, toX, toY, color) => {
            const headlen = 12;
            const dx = toX - fromX;
            const dy = toY - fromY;
            const angle = Math.atan2(dy, dx);
            ctx.save();
            ctx.strokeStyle = color;
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(fromX, fromY);
            ctx.lineTo(toX, toY);
            ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
            ctx.moveTo(toX, toY);
            ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
            ctx.stroke();
            
            ctx.fillStyle = color;
            ctx.font = 'bold 16px Oswald';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, fromX + dx / 2, fromY + dy / 2 - 15);
            ctx.restore();
        };
        
        // Dibujar contorno simple de la tabla periódica
        ctx.strokeStyle = '#617891';
        ctx.lineWidth = 2;
        ctx.strokeRect(50, 50, 400, 200);
        
        // Dibujar flechas de tendencias
        // Radio Atómico (aumenta hacia abajo y a la izquierda)
        drawTrendArrow("Radio Atómico", 420, 220, 80, 220, '#dc3545'); // Izquierda
        drawTrendArrow("", 80, 80, 80, 220, '#dc3545'); // Abajo
        
        // Energía de Ionización y Electronegatividad (aumenta hacia arriba y a la derecha)
        drawTrendArrow("E. Ionización y Electronegatividad", 80, 80, 420, 80, '#28a745'); // Derecha
        drawTrendArrow("", 420, 220, 420, 80, '#28a745'); // Arriba
    }
}

export const tema = {
    title: "Tabla Periódica y Propiedades",
    teoria: teoria,
    parts: [],
    quiz: quiz,
    init: initVisualizations // Asignamos la función de dibujo
};