// js/ui/modal.js

import { $ } from '../utils.js';

const modal = $('#solution-modal');
const overlay = $('#solution-modal-overlay');
const modalContent = $('#solution-modal-content');
const closeBtn = $('.modal-close-btn');

/**
 * Muestra el modal con el contenido HTML proporcionado.
 * @param {string} contentHTML - El HTML que se inyectará en el modal.
 */
export async function showModal(contentHTML) {
 // 1. Inyectar el contenido
 modalContent.innerHTML = `<div class="modal-solution-content">${contentHTML}</div>`;
 
 // 2. Activar la visibilidad
 overlay.classList.add('active');
 modal.classList.add('active');
 document.body.style.overflow = 'hidden'; // Evitar scroll del fondo
 
 // 3. ¡CRÍTICO! Renderizar MathJax en el nuevo contenido
 try {
  await MathJax.typesetPromise([modalContent]);
  console.log('MathJax renderizado en el modal.');
 } catch (err) {
  console.error('Error al renderizar MathJax en el modal:', err);
 }
}

/**
 * Cierra el modal.
 */
function closeModal() {
 overlay.classList.remove('active');
 modal.classList.remove('active');
 document.body.style.overflow = ''; // Restaurar scroll
 
 // Limpiar contenido para la próxima vez
 setTimeout(() => {
  modalContent.innerHTML = '';
 }, 300); // Esperar a que termine la transición de cierre
}

/**
 * Inicializa los listeners para cerrar el modal.
 */
export function initModal() {
 closeBtn.addEventListener('click', closeModal);
 overlay.addEventListener('click', closeModal);
 
 document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
   closeModal();
  }
 });
}