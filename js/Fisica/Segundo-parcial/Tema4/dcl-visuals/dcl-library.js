// js/Fisica/Segundo-parcial/Tema4/dcl-visuals/dcl-library.js

import { drawArrow, drawBlock } from './utils.js';

// Cada función es responsable de dibujar un único DCL.
// Todas reciben el contexto del canvas (ctx) como argumento.

function drawEx1(ctx) { ctx.fillText('Conceptual (Sin DCL)', 150, 125); }
function drawEx2(ctx) {
    drawBlock(ctx, 125, 80, 50, 30);
    drawArrow(ctx, 150, 80, 150, 30, '#28a745'); ctx.fillText('T', 160, 25);
    drawArrow(ctx, 150, 110, 150, 160, '#dc3545'); ctx.fillText('P', 160, 170);
}
function drawEx3(ctx) {
    drawBlock(ctx, 125, 100, 50, 30);
    drawArrow(ctx, 150, 100, 100, 50, '#28a745'); ctx.fillText('T₁', 90, 45);
    drawArrow(ctx, 150, 100, 200, 50, '#28a745'); ctx.fillText('T₂', 210, 45);
    drawArrow(ctx, 150, 130, 150, 180, '#dc3545'); ctx.fillText('P', 160, 190);
}
function drawEx4(ctx) {
    drawBlock(ctx, 125, 100, 50, 50, 'Niño');
    drawArrow(ctx, 150, 100, 150, 50, '#28a745'); ctx.fillText('N', 160, 40);
    drawArrow(ctx, 150, 150, 150, 200, '#dc3545'); ctx.fillText('P', 160, 210);
}
function drawEx5(ctx) {
    drawBlock(ctx, 100, 100, 50, 50);
    drawArrow(ctx, 150, 125, 200, 125, '#D5B893'); ctx.fillText('F', 210, 125);
    drawArrow(ctx, 125, 100, 125, 50, '#28a745'); ctx.fillText('N', 135, 40);
    drawArrow(ctx, 125, 150, 125, 200, '#dc3545'); ctx.fillText('P', 135, 210);
    drawArrow(ctx, 210, 100, 250, 100, '#6F4D38', 4); ctx.fillText('a', 260, 100);
}
function drawEx6(ctx) {
    drawBlock(ctx, 100, 100, 50, 50);
    drawArrow(ctx, 125, 100, 185, 63, '#D5B893'); ctx.fillText('F', 195, 58);
    drawArrow(ctx, 125, 100, 125, 40, '#28a745'); ctx.fillText('N', 135, 30);
    drawArrow(ctx, 125, 150, 125, 210, '#dc3545'); ctx.fillText('P', 135, 220);
    drawArrow(ctx, 190, 100, 230, 100, '#6F4D38', 4); ctx.fillText('a', 240, 100);
}
function drawEx7(ctx) {
    ctx.save();
    ctx.translate(50, 180);
    ctx.rotate(-Math.PI / 6); // 30 grados
    drawBlock(ctx, 50, -30, 50, 30);
    ctx.fillStyle = '#617891'; ctx.fillRect(-20, 0, 200, 10);
    drawArrow(ctx, 75, -30, 75, -80, '#28a745'); ctx.fillText('N', 85, -85);
    drawArrow(ctx, 75, 0, 125, 0, '#6F4D38', 4); ctx.fillText('a', 135, 0);
    ctx.restore();
    drawArrow(ctx, 115, 115, 115, 165, '#dc3545'); ctx.fillText('P', 125, 175);
}
function drawEx8(ctx) {
    drawBlock(ctx, 125, 100, 50, 50, 'Niño');
    drawArrow(ctx, 150, 100, 150, 40, '#28a745', 3); ctx.fillText('N', 160, 30);
    drawArrow(ctx, 150, 150, 150, 210, '#dc3545'); ctx.fillText('P', 160, 220);
    drawArrow(ctx, 200, 125, 200, 85, '#6F4D38', 4); ctx.fillText('a', 210, 75);
}
function drawEx9(ctx) {
    drawBlock(ctx, 125, 100, 50, 50);
    drawArrow(ctx, 175, 125, 225, 125, '#D5B893'); ctx.fillText('F_max', 235, 125);
    drawArrow(ctx, 125, 125, 75, 125, '#E67E22'); ctx.fillText('f_s,max', 45, 125);
    drawArrow(ctx, 150, 100, 150, 50, '#28a745'); ctx.fillText('N', 160, 40);
    drawArrow(ctx, 150, 150, 150, 200, '#dc3545'); ctx.fillText('P', 160, 210);
}
function drawEx10(ctx) {
    drawBlock(ctx, 125, 100, 50, 50);
    drawArrow(ctx, 175, 125, 225, 125, '#D5B893'); ctx.fillText('F', 235, 125);
    drawArrow(ctx, 125, 125, 75, 125, '#E67E22'); ctx.fillText('f_k', 65, 125);
    drawArrow(ctx, 230, 100, 270, 100, '#6F4D38', 4); ctx.fillText('a', 280, 100);
}
function drawEx11(ctx) {
    ctx.save();
    ctx.translate(50, 180);
    ctx.rotate(-15 * Math.PI / 180);
    drawBlock(ctx, 50, -30, 50, 30);
    ctx.fillStyle = '#617891'; ctx.fillRect(-20, 0, 200, 10);
    drawArrow(ctx, 75, 0, 25, 0, '#E67E22'); ctx.fillText('f_k', 15, -5);
    ctx.restore();
    drawArrow(ctx, 110, 130, 140, 140, '#6F4D38', 4); ctx.fillText('a', 150, 150);
}
function drawEx12(ctx) {
    drawBlock(ctx, 80, 100, 40, 40, 'm₁');
    drawBlock(ctx, 120, 100, 60, 40, 'm₂');
    drawArrow(ctx, 40, 120, 80, 120, '#D5B893'); ctx.fillText('F', 30, 120);
    drawArrow(ctx, 120, 120, 100, 120, '#28a745'); ctx.fillText('F₂₁', 100, 110);
    drawArrow(ctx, 120, 120, 140, 120, '#28a745'); ctx.fillText('F₁₂', 140, 110);
    drawArrow(ctx, 190, 100, 230, 100, '#6F4D38', 4); ctx.fillText('a', 240, 100);
}
function drawEx13(ctx) {
    ctx.strokeRect(145, 20, 10, 10);
    drawBlock(ctx, 50, 80, 40, 40, 'm₁');
    drawBlock(ctx, 210, 100, 40, 40, 'm₂');
    drawArrow(ctx, 70, 80, 70, 40, '#28a745'); ctx.fillText('T', 80, 35);
    drawArrow(ctx, 70, 120, 70, 160, '#dc3545'); ctx.fillText('P₁', 80, 170);
    drawArrow(ctx, 230, 100, 230, 60, '#28a745'); ctx.fillText('T', 240, 55);
    drawArrow(ctx, 230, 140, 230, 180, '#dc3545'); ctx.fillText('P₂', 240, 190);
}
function drawEx14(ctx) {
    ctx.fillStyle = '#617891'; ctx.fillRect(20, 150, 180, 10);
    drawBlock(ctx, 80, 120, 40, 30, 'm₁');
    drawBlock(ctx, 230, 180, 30, 40, 'm₂');
    drawArrow(ctx, 120, 135, 180, 135, '#28a745'); ctx.fillText('T', 150, 125);
    drawArrow(ctx, 245, 180, 245, 140, '#28a745'); ctx.fillText('T', 255, 135);
    drawArrow(ctx, 245, 220, 245, 260, '#dc3545'); ctx.fillText('P₂', 255, 270);
}
function drawEx15(ctx) {
    drawBlock(ctx, 50, 100, 30, 30, 'm₁');
    drawBlock(ctx, 100, 100, 40, 30, 'm₂');
    drawBlock(ctx, 160, 100, 50, 30, 'm₃');
    drawArrow(ctx, 210, 115, 260, 115, '#D5B893'); ctx.fillText('F', 270, 115);
    drawArrow(ctx, 80, 115, 100, 115, '#28a745'); ctx.fillText('T₁₂', 85, 105);
    drawArrow(ctx, 140, 115, 160, 115, '#28a745'); ctx.fillText('T₂₃', 145, 105);
}
function drawEx16(ctx) {
    ctx.save();
    ctx.translate(20, 180);
    ctx.rotate(-37 * Math.PI / 180);
    drawBlock(ctx, 50, -30, 40, 30, 'm₁');
    ctx.fillStyle = '#617891'; ctx.fillRect(0, 0, 150, 10);
    ctx.restore();
    drawBlock(ctx, 230, 180, 30, 40, 'm₂');
    ctx.strokeRect(145, 45, 10, 10); // Polea
    drawArrow(ctx, 245, 180, 245, 140, '#28a745'); ctx.fillText('T', 255, 135);
    drawArrow(ctx, 245, 220, 245, 260, '#dc3545'); ctx.fillText('P₂', 255, 270);
}
function drawEx17(ctx) { ctx.fillText('Conceptual (Cálculo)', 150, 125); }
function drawEx18(ctx) {
    ctx.fillStyle = '#617891'; ctx.fillRect(145, 20, 10, 50); // Techo
    ctx.lineWidth = 2; ctx.strokeStyle = '#333';
    ctx.beginPath(); // Muelle
    for(let i=0; i<6; i++) { ctx.arc(150, 80 + i*10, 10, Math.PI*0.5, Math.PI*1.5); }
    ctx.stroke();
    drawBlock(ctx, 125, 140, 50, 30);
    drawArrow(ctx, 150, 140, 150, 80, '#28a745'); ctx.fillText('Fₘ', 160, 110);
    drawArrow(ctx, 150, 170, 150, 220, '#dc3545'); ctx.fillText('P', 160, 230);
}
function drawEx19(ctx) { ctx.fillText('Conceptual (3ª Ley)', 150, 125); }
function drawEx20(ctx) {
    ctx.fillStyle = '#617891'; ctx.fillRect(20, 150, 180, 10);
    drawBlock(ctx, 80, 120, 40, 30, 'm₁');
    drawBlock(ctx, 230, 180, 30, 40, 'm₂');
    drawArrow(ctx, 120, 135, 180, 135, '#28a745'); ctx.fillText('T', 150, 125);
    drawArrow(ctx, 100, 150, 100, 180, '#E67E22'); ctx.fillText('fₖ', 110, 190);
    drawArrow(ctx, 245, 180, 245, 140, '#28a745'); ctx.fillText('T', 255, 135);
    drawArrow(ctx, 245, 220, 245, 260, '#dc3545'); ctx.fillText('P₂', 255, 270);
}

// Exportamos un objeto que contiene todas las funciones de dibujo.
export const dclLibrary = {
    drawEx1, drawEx2, drawEx3, drawEx4, drawEx5, drawEx6, drawEx7, drawEx8, drawEx9, drawEx10,
    drawEx11, drawEx12, drawEx13, drawEx14, drawEx15, drawEx16, drawEx17, drawEx18, drawEx19, drawEx20
};