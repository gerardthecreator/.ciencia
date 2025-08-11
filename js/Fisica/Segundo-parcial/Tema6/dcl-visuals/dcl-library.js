// js/Fisica/Segundo-parcial/Tema6/dcl-visuals/dcl-library.js

import { drawArrow, drawBlock } from './utils.js';

// Cada función es responsable de dibujar un único DCL.
function drawEx1(ctx) {
    drawBlock(ctx, 100, 100, 50, 50);
    drawArrow(ctx, 125, 100, 125, 50, '#28a745'); ctx.fillText('N', 135, 45);
    drawArrow(ctx, 125, 150, 125, 200, '#dc3545'); ctx.fillText('P', 135, 210);
    drawArrow(ctx, 125, 125, 75, 125, '#E67E22'); ctx.fillText('fₖ', 65, 125);
    drawArrow(ctx, 175, 175, 125, 125, '#D5B893'); ctx.fillText('F', 185, 185);
    drawArrow(ctx, 160, 100, 200, 100, '#6F4D38', 4); ctx.fillText('a', 210, 100);
}
function drawEx2(ctx) {
    ctx.save();
    ctx.translate(50, 180);
    ctx.rotate(-20 * Math.PI / 180); // Ángulo genérico θ
    drawBlock(ctx, 50, -30, 50, 30);
    ctx.fillStyle = '#617891'; ctx.fillRect(-20, 0, 200, 10);
    drawArrow(ctx, 75, 0, 125, 0, '#dc3545'); ctx.fillText('Pₓ', 135, 0);
    drawArrow(ctx, 75, 0, 25, 0, '#E67E22'); ctx.fillText('fₛ,ₘₐₓ', 10, -5);
    ctx.restore();
}
function drawEx3(ctx) {
    ctx.beginPath(); ctx.fillStyle = 'rgba(100,150,255,0.3)'; ctx.fillRect(50, 50, 200, 200);
    drawBlock(ctx, 140, 80, 20, 20); // Esfera
    drawArrow(ctx, 150, 100, 150, 150, '#dc3545'); ctx.fillText('P', 160, 160);
    drawArrow(ctx, 150, 80, 150, 30, '#28a745'); ctx.fillText('E', 160, 20);
    drawArrow(ctx, 150, 80, 150, 10, '#E67E22'); ctx.fillText('Fₖ', 160, 0);
}
function drawEx4(ctx) {
    drawBlock(ctx, 125, 50, 50, 80, 'Persona');
    drawArrow(ctx, 150, 130, 150, 200, '#dc3545'); ctx.fillText('P', 160, 210);
    drawArrow(ctx, 150, 50, 150, 0, '#E67E22'); ctx.fillText('Fₖ', 160, -10);
    drawArrow(ctx, 150, 130, 150, 160, '#6F4D38', 4); ctx.fillText('a', 160, 170);
}
function drawEx5(ctx) {
    ctx.save();
    ctx.translate(50, 180);
    ctx.rotate(-15 * Math.PI / 180); // Peralte
    drawBlock(ctx, 100, -30, 50, 20);
    ctx.fillStyle = '#617891'; ctx.fillRect(-20, 0, 250, 10);
    drawArrow(ctx, 125, -30, 125, -80, '#28a745'); ctx.fillText('N', 135, -85);
    drawArrow(ctx, 125, -20, 80, -20, '#E67E22'); ctx.fillText('fₛ', 70, -25);
    ctx.restore();
    drawArrow(ctx, 150, 120, 150, 170, '#dc3545'); ctx.fillText('P', 160, 180);
}
function drawEx6(ctx) {
    ctx.beginPath(); ctx.setLineDash([5, 3]);
    ctx.arc(150, 150, 100, Math.PI, 0); // Cima
    ctx.arc(150, 150, 120, 0, Math.PI); // Valle
    ctx.stroke();
    drawBlock(ctx, 140, 50, 20, 10); // Cima
    drawBlock(ctx, 140, 260, 20, 10); // Valle
}
function drawEx7(ctx) {
    ctx.beginPath(); ctx.moveTo(150, 0); ctx.lineTo(150, 250); ctx.moveTo(0, 125); ctx.lineTo(300, 125); ctx.stroke();
    ctx.fillText('m₁ (0,4)', 150, 45);
    ctx.fillText('m₂ (-3,-2)', 75, 165);
    ctx.fillText('m₃ (x,y)', 225, 200);
    ctx.fillStyle = 'red'; ctx.fillRect(148, 123, 4, 4); ctx.fillText('CM', 165, 120);
}
function drawEx8(ctx) {
    ctx.beginPath(); ctx.setLineDash([5, 3]);
    ctx.arc(150, 200, 120, Math.PI, 0); ctx.stroke();
    drawBlock(ctx, 140, 80, 20, 20, 'Boom!');
    drawArrow(ctx, 150, 100, 120, 120, '#28a745'); ctx.fillText('v₁', 110, 130);
    drawArrow(ctx, 150, 100, 180, 70, '#dc3545'); ctx.fillText('v₂', 190, 60);
}
function drawEx9(ctx) { ctx.fillText('Numérico (Sin DCL)', 150, 125); }
function drawEx10(ctx) { ctx.fillText('Numérico (Sin DCL)', 150, 125); }
function drawEx11(ctx) {
    ctx.beginPath(); ctx.setLineDash([5, 3]); ctx.arc(150, 125, 80, 0, 2 * Math.PI); ctx.stroke();
    drawBlock(ctx, 220, 115, 20, 20);
    drawArrow(ctx, 230, 125, 180, 125, '#E67E22'); ctx.fillText('fₛ,ₘₐₓ', 170, 120);
    ctx.fillText('Vista Superior', 150, 20);
}
function drawEx12(ctx) {
    ctx.moveTo(150, 20); ctx.lineTo(150, 80); ctx.lineTo(220, 120); ctx.lineTo(150, 80); ctx.stroke();
    drawBlock(ctx, 210, 120, 20, 20);
    drawArrow(ctx, 220, 120, 150, 120, '#6F4D38'); ctx.fillText('a꜀', 180, 115);
    drawArrow(ctx, 220, 120, 185, 95, '#28a745'); ctx.fillText('T', 175, 90);
    drawArrow(ctx, 220, 140, 220, 180, '#dc3545'); ctx.fillText('P', 230, 190);
}
function drawEx13(ctx) {
    drawBlock(ctx, 50, 120, 40, 20, 'm₁');
    drawBlock(ctx, 210, 120, 40, 20, 'm₂');
    drawArrow(ctx, 90, 130, 130, 130, '#28a745');
    drawArrow(ctx, 210, 130, 170, 130, '#28a745');
    ctx.fillStyle = 'red'; ctx.fillRect(148, 128, 4, 4); ctx.fillText('CM', 165, 125);
}
function drawEx14(ctx) {
    ctx.beginPath(); ctx.setLineDash([5, 3]);
    ctx.arc(150, 150, 100, Math.PI * 1.2, Math.PI * -0.2); ctx.stroke();
    drawBlock(ctx, 140, 50, 20, 10);
    drawArrow(ctx, 150, 60, 150, 100, '#dc3545'); ctx.fillText('P', 160, 110);
    drawArrow(ctx, 150, 60, 150, 30, '#28a745'); ctx.fillText('N', 160, 20);
    drawArrow(ctx, 140, 55, 100, 55, '#E67E22'); ctx.fillText('f (aₜ)', 90, 55);
}
function drawEx15(ctx) {
    drawBlock(ctx, 100, 100, 50, 50);
    drawArrow(ctx, 125, 100, 125, 50, '#28a745'); ctx.fillText('N', 135, 45);
    drawArrow(ctx, 125, 150, 125, 200, '#dc3545'); ctx.fillText('P', 135, 210);
    drawArrow(ctx, 125, 125, 75, 125, '#E67E22'); ctx.fillText('fₖ', 65, 125);
    drawArrow(ctx, 125, 125, 185, 88, '#D5B893'); ctx.fillText('F', 195, 83);
}
function drawEx16(ctx) {
    ctx.save(); ctx.translate(-80, 150); ctx.rotate(-30 * Math.PI / 180);
    ctx.fillStyle = '#617891'; ctx.fillRect(0, 0, 200, 10); ctx.restore();
    ctx.save(); ctx.translate(380, 100); ctx.rotate(53 * Math.PI / 180);
    ctx.fillStyle = '#617891'; ctx.fillRect(-200, 0, 200, 10); ctx.restore();
    ctx.strokeRect(145, 20, 10, 10); // Polea
    drawBlock(ctx, 80, 100, 30, 20, 'm₁');
    drawBlock(ctx, 200, 100, 30, 20, 'm₂');
}
function drawEx17(ctx) {
    ctx.beginPath(); ctx.setLineDash([5, 3]);
    ctx.arc(150, 125, 80, 0, 2 * Math.PI); ctx.stroke();
    drawBlock(ctx, 140, 45-10, 20, 20); // Arriba
    drawBlock(ctx, 140, 205-10, 20, 20); // Abajo
    drawArrow(ctx, 150, 65, 150, 115, '#6F4D38'); ctx.fillText('a꜀', 160, 90);
}
function drawEx18(ctx) {
    ctx.beginPath(); ctx.setLineDash([5, 3]);
    ctx.arc(150, 125, 80, 0, 2 * Math.PI); ctx.stroke();
    drawBlock(ctx, 220, 115, 20, 20);
    drawArrow(ctx, 230, 125, 180, 125, '#E67E22'); ctx.fillText('fₛ,ₘₐₓ', 170, 120);
    ctx.fillText('Vista Superior', 150, 20);
}
function drawEx19(ctx) {
    drawBlock(ctx, 50, 120, 200, 20, 'Plataforma');
    drawBlock(ctx, 80, 100, 20, 20, 'Niño');
    ctx.fillStyle = 'red'; ctx.fillRect(148, 128, 4, 4); ctx.fillText('CM', 165, 125);
}
function drawEx20(ctx) { ctx.fillText('Numérico (Sin DCL)', 150, 125); }

// Exportamos un objeto que contiene todas las funciones de dibujo.
export const dclLibrary = {
    drawEx1, drawEx2, drawEx3, drawEx4, drawEx5, drawEx6, drawEx7, drawEx8, drawEx9, drawEx10,
    drawEx11, drawEx12, drawEx13, drawEx14, drawEx15, drawEx16, drawEx17, drawEx18, drawEx19, drawEx20
};