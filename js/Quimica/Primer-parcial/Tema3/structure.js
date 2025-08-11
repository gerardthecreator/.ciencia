// js/Quimica/Primer-parcial/Tema3/structure.js

import { teoria } from './Teoria.js';
import { quiz } from './Quiz.js';

/**
 * Función que se ejecuta después de cargar el HTML del tema para dibujar en los canvas.
 */
function initVisualizations() {
 // --- Visualización 1: Efecto Fotoeléctrico ---
 const canvasPhotoelectric = document.getElementById('canvas-photoelectric');
 if (canvasPhotoelectric) {
  const ctx = canvasPhotoelectric.getContext('2d');
  ctx.font = '14px Oswald';
  ctx.textAlign = 'center';
  
  // Dibujar la superficie metálica
  ctx.fillStyle = '#617891';
  ctx.fillRect(50, 150, 300, 30);
  ctx.fillStyle = '#333';
  ctx.fillText('Superficie Metálica', 200, 190);
  
  // Dibujar un fotón incidente (luz)
  ctx.beginPath();
  ctx.strokeStyle = '#D5B893';
  ctx.lineWidth = 3;
  ctx.moveTo(80, 20);
  // Simulación de onda de luz
  ctx.quadraticCurveTo(100, 80, 120, 50);
  ctx.quadraticCurveTo(140, 20, 160, 50);
  ctx.quadraticCurveTo(180, 80, 200, 50);
  // Flecha al final
  ctx.lineTo(205, 55);
  ctx.moveTo(200, 50);
  ctx.lineTo(195, 55);
  ctx.stroke();
  ctx.fillText('Fotón (Luz)', 120, 30);
  
  // Dibujar un electrón eyectado
  ctx.beginPath();
  ctx.fillStyle = '#25344F';
  ctx.arc(220, 140, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.strokeStyle = '#6F4D38';
  ctx.lineWidth = 2;
  ctx.moveTo(220, 140);
  ctx.lineTo(280, 80);
  ctx.stroke();
  ctx.fillText('e⁻ (electrón)', 290, 75);
 }
 
 // --- Visualización 2: Orbitales Atómicos ---
 const canvasOrbitals = document.getElementById('canvas-orbitals');
 if (canvasOrbitals) {
  const ctx = canvasOrbitals.getContext('2d');
  ctx.font = '14px Oswald';
  ctx.textAlign = 'center';
  
  // Orbital s (esférico)
  ctx.beginPath();
  ctx.fillStyle = 'rgba(213, 184, 147, 0.5)';
  ctx.arc(100, 100, 50, 0, 2 * Math.PI);
  ctx.fill();
  ctx.strokeStyle = '#D5B893';
  ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.fillText('Orbital s (l=0)', 100, 170);
  
  // Orbital p (lobular)
  const px = 300;
  const py = 100;
  ctx.beginPath();
  ctx.fillStyle = 'rgba(111, 77, 56, 0.5)';
  // Lóbulo superior
  ctx.ellipse(px, py - 35, 25, 50, 0, 0, 2 * Math.PI);
  // Lóbulo inferior
  ctx.ellipse(px, py + 35, 25, 50, 0, 0, 2 * Math.PI);
  ctx.fill();
  ctx.strokeStyle = '#6F4D38';
  ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.fillText('Orbital p (l=1)', 300, 170);
 }
}

export const tema = {
 title: "Teoría Cuántica y Estructura Electrónica",
 teoria: teoria,
 parts: [],
 quiz: quiz,
 init: initVisualizations // Asignamos la función de dibujo para que se ejecute
};