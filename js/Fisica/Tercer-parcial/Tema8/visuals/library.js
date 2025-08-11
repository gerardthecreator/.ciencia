// js/Fisica/Tercer-parcial/Tema8/visuals/library.js

import { drawArrow, drawBlock } from './utils.js';

function drawEx1(ctx) {
    drawBlock(ctx, 50, 120, 80, 30);
    ctx.fillStyle = '#617891'; ctx.fillRect(0, 150, 300, 10);
    drawArrow(ctx, 170, 170, 90, 135, '#D5B893'); ctx.fillText('F', 180, 180);
    drawArrow(ctx, 50, 135, 250, 135, '#6F4D38', 4); ctx.fillText('d', 150, 125);
}
function drawEx2(ctx) {
    drawBlock(ctx, 100, 100, 50, 50);
    drawArrow(ctx, 125, 100, 125, 50, '#28a745'); ctx.fillText('N', 135, 45);
    drawArrow(ctx, 125, 150, 125, 200, '#dc3545'); ctx.fillText('P', 135, 210);
    drawArrow(ctx, 150, 125, 200, 125, '#6F4D38', 4); ctx.fillText('d', 210, 125);
    drawArrow(ctx, 100, 125, 50, 125, '#D5B893'); ctx.fillText('F', 40, 125);
}
function drawEx3(ctx) {
    drawBlock(ctx, 50, 100, 80, 40, 'Coche');
    drawArrow(ctx, 90, 100, 90, 60, '#6F4D38', 4); ctx.fillText('vᵢ', 100, 50);
    drawBlock(ctx, 180, 100, 80, 40, 'Coche');
    drawArrow(ctx, 220, 100, 220, 40, '#6F4D38', 5); ctx.fillText('vₒ', 230, 30);
}
function drawEx4(ctx) {
    drawArrow(ctx, 50, 150, 200, 150, '#333'); ctx.fillText('X', 210, 150);
    drawArrow(ctx, 50, 150, 50, 50, '#333'); ctx.fillText('Y', 50, 40);
    drawArrow(ctx, 50, 150, 150, 100, '#D5B893', 3); ctx.fillText('F⃗', 155, 95);
    drawArrow(ctx, 50, 150, 170, 210, '#28a745', 3); ctx.fillText('Δr⃗', 175, 215);
}
function drawEx5(ctx) {
    drawBlock(ctx, 50, 100, 50, 50);
    drawArrow(ctx, 100, 125, 150, 125, '#D5B893'); ctx.fillText('F', 160, 125);
    drawArrow(ctx, 50, 125, 250, 125, '#6F4D38', 4); ctx.fillText('d', 150, 115);
}
function drawEx6(ctx) {
    ctx.fillStyle = '#617891'; ctx.fillRect(50, 50, 10, 150); // Pared
    ctx.lineWidth = 3; ctx.strokeStyle = '#333';
    ctx.beginPath(); for(let i=0; i<8; i++) { ctx.arc(70 + i*20, 125, 10, Math.PI*0.5, Math.PI*1.5); } ctx.stroke();
    drawBlock(ctx, 230, 110, 30, 30);
}
function drawEx7(ctx) {
    ctx.beginPath(); ctx.moveTo(50, 150); ctx.lineTo(150, 50); ctx.lineTo(250, 150); ctx.lineTo(50, 150); ctx.fill();
    ctx.fillText('Área = Trabajo', 150, 120);
}
function drawEx8(ctx) { ctx.fillText('Conceptual (Cálculo)', 150, 125); }
function drawEx9(ctx) {
    drawBlock(ctx, 125, 50, 50, 80, 'Cabina');
    drawArrow(ctx, 150, 50, 150, 10, '#28a745'); ctx.fillText('Fₘₒₜₒᵣ', 170, 5);
    drawArrow(ctx, 150, 130, 150, 180, '#dc3545'); ctx.fillText('P', 160, 190);
}
function drawEx10(ctx) {
    drawBlock(ctx, 50, 100, 50, 50);
    drawArrow(ctx, 75, 100, 135, 63, '#D5B893'); ctx.fillText('F', 145, 58);
    drawArrow(ctx, 75, 125, 25, 125, '#E67E22'); ctx.fillText('fₖ', 15, 125);
}
function drawEx11(ctx) {
    ctx.save(); ctx.translate(50, 180); ctx.rotate(-30 * Math.PI / 180);
    drawBlock(ctx, 150, -30, 50, 30);
    ctx.fillStyle = '#617891'; ctx.fillRect(-20, 0, 250, 10);
    ctx.restore();
}
function drawEx12(ctx) {
    drawBlock(ctx, 50, 100, 80, 40, 'Coche');
    drawArrow(ctx, 130, 120, 80, 120, '#E67E22', 4); ctx.fillText('fₖ', 70, 120);
    drawArrow(ctx, 50, 120, 250, 120, '#6F4D38', 4); ctx.fillText('d', 150, 110);
}
function drawEx13(ctx) {
    ctx.moveTo(150, 20); ctx.lineTo(150, 80); ctx.lineTo(200, 150); ctx.stroke();
    drawBlock(ctx, 190, 150, 20, 20);
    drawArrow(ctx, 200, 170, 200, 220, '#dc3545'); ctx.fillText('P', 210, 230);
    drawArrow(ctx, 200, 150, 165, 125, '#28a745'); ctx.fillText('T', 155, 120);
}
function drawEx14(ctx) {
    ctx.beginPath(); ctx.arc(150, 125, 80, 0, 2 * Math.PI); ctx.stroke();
    drawBlock(ctx, 220, 115, 20, 20, 'S');
    drawArrow(ctx, 230, 125, 180, 125, '#dc3545'); ctx.fillText('F₉', 170, 120);
}
function drawEx15(ctx) { ctx.fillText('Conceptual (CM)', 150, 125); }
function drawEx16(ctx) {
    ctx.save(); ctx.translate(50, 180); ctx.rotate(-37 * Math.PI / 180);
    drawBlock(ctx, 50, -30, 50, 30);
    ctx.fillStyle = '#617891'; ctx.fillRect(-20, 0, 200, 10);
    drawArrow(ctx, 75, 0, 25, 0, '#E67E22'); ctx.fillText('fₖ', 15, -5);
    drawArrow(ctx, 75, 0, 25, 0, '#dc3545'); ctx.fillText('Pₓ', 15, 15);
    ctx.restore();
}
function drawEx17(ctx) { ctx.fillText('Conceptual (Cálculo)', 150, 125); }
function drawEx18(ctx) { ctx.fillText('Conceptual (Cálculo)', 150, 125); }
function drawEx19(ctx) {
    ctx.beginPath(); ctx.setLineDash([5, 3]);
    ctx.arc(200, 125, 80, Math.PI, 0, true);
    ctx.moveTo(50, 205); ctx.lineTo(120, 205);
    ctx.stroke();
    drawBlock(ctx, 40, 50, 20, 10);
    ctx.fillText('h', 30, 125);
}
function drawEx20(ctx) {
    ctx.fillStyle = '#617891'; ctx.fillRect(100, 150, 100, 10);
    ctx.save(); ctx.translate(250, 180); ctx.rotate(-20 * Math.PI / 180);
    ctx.fillStyle = '#617891'; ctx.fillRect(-20, 0, 100, 10); ctx.restore();
    ctx.lineWidth = 3; ctx.strokeStyle = '#333';
    ctx.beginPath(); for(let i=0; i<4; i++) { ctx.arc(80 + i*10, 135, 5, Math.PI*0.5, Math.PI*1.5); } ctx.stroke();
    drawBlock(ctx, 120, 120, 30, 30);
}

export const library = {
    drawEx1, drawEx2, drawEx3, drawEx4, drawEx5, drawEx6, drawEx7, drawEx8, drawEx9, drawEx10,
    drawEx11, drawEx12, drawEx13, drawEx14, drawEx15, drawEx16, drawEx17, drawEx18, drawEx19, drawEx20
};