// js/general-control.js

import { $, $$ } from './utils.js';
import { initModal } from './ui/modal.js';
import { courseStructure } from './course-structure.js'; // <-- CAMBIO DE IMPORTACIÓN

// --- CONSTANTES Y ELEMENTOS DEL DOM ---
const homeView = $('#home-view');
const contentView = $('#content-view');
const hamburger = $('.hamburger');
const navLinks = $('.nav-links');
const logoLink = $('.logo');

// Links de navegación de materias
const navFisicaLink = $('#nav-fisica');
const navQuimicaLink = $('.disabled-link'); // Asumimos que es el primero deshabilitado

// Botones de selección de materias
const selectFisicaBtn = $('#select-fisica');
const selectQuimicaBtn = $('.subject-card:disabled'); // Asumimos que es el primero

// --- ESTADO DE LA APLICACIÓN ---
let currentSubjectStructure = null;

// --- GESTIÓN DE VISTAS ---
function showHomeView() {
    currentSubjectStructure = null;
    contentView.style.display = 'none';
    homeView.style.display = 'block';
    $$('.nav-links a').forEach(a => a.classList.remove('active'));
}

function showContentView(initialHTML = '') {
    homeView.style.display = 'none';
    contentView.innerHTML = initialHTML;
    contentView.style.display = 'block';
}

// --- RENDERIZADO DE CONTENIDO ---
function renderSubjectHub(structure) {
    currentSubjectStructure = structure;
    
    let hubHTML = `<div class="subject-hub-container">`;
    hubHTML += `<h2 class="hub-title">${structure.title}</h2>`;
    
    structure.partials.forEach(partial => {
        hubHTML += `<h3 class="partial-title" data-action="go-home">${partial.title}</h3>`;
        hubHTML += `<div class="topic-card-grid">`;
        partial.topics.forEach(topic => {
            if (topic.module) {
                hubHTML += `<div class="topic-card" data-topic-id="${topic.id}"><h3>${topic.title}</h3></div>`;
            } else {
                hubHTML += `<div class="topic-card disabled"><h3>${topic.title}</h3></div>`;
            }
        });
        hubHTML += `</div>`;
    });
    hubHTML += `</div>`;
    
    showContentView(hubHTML);
    
    contentView.querySelectorAll('.topic-card[data-topic-id]').forEach(card => {
        card.addEventListener('click', () => loadAndRenderTopic(card.dataset.topicId));
    });
    contentView.querySelectorAll('.partial-title[data-action="go-home"]').forEach(title => {
        title.addEventListener('click', showHomeView);
    });
    
    $$('.nav-links a').forEach(a => a.classList.remove('active'));
    if (structure.title === "Física I") navFisicaLink.classList.add('active');
    if (structure.title === "Química I") navQuimicaLink.classList.add('active');
}

async function loadAndRenderTopic(topicId) {
    showContentView('<h1>Cargando tema...</h1>');
    
    let topicData = null;
    for (const partial of currentSubjectStructure.partials) {
        const found = partial.topics.find(t => t.id === topicId);
        if (found) {
            topicData = found;
            break;
        }
    }
    
    if (!topicData || !topicData.module) {
        showContentView('<h1>Error: Tema no encontrado o no disponible.</h1>');
        return;
    }
    
    try {
        const topicModule = await topicData.module();
        const topicContent = topicModule.tema;
        
        let innerHTML = '';
        if (typeof topicContent.getHTML === 'function') {
            innerHTML = topicContent.getHTML();
        } else {
            if (topicContent.teoria) innerHTML += topicContent.teoria.getHTML();
            if (topicContent.parts) topicContent.parts.forEach(p => innerHTML += p.getHTML());
            if (topicContent.quiz) innerHTML += topicContent.quiz.getHTML();
        }
        
        const finalHTML = `
            <div class="topic-container">
                <button class="btn-back">← Volver a los temas</button>
                <h1>${topicContent.title}</h1>
                ${innerHTML}
            </div>`;
        
        contentView.innerHTML = finalHTML;
        window.scrollTo(0, 0);
        
        $('.btn-back').addEventListener('click', () => renderSubjectHub(currentSubjectStructure));
        
        await MathJax.typesetPromise([contentView]);
        
        if (topicContent.parts) topicContent.parts.forEach(p => p.init && p.init());
        if (topicContent.quiz && topicContent.quiz.init) topicContent.quiz.init();
        if (typeof topicContent.init === 'function') {
            topicContent.init();
        }
        
    } catch (error) {
        console.error("Error al cargar el módulo del tema:", error);
        showContentView('<h1>Error al cargar el contenido. Por favor, intente de nuevo.</h1>');
    }
}

// --- MANEJADORES DE EVENTOS GLOBALES ---
function setupEventListeners() {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        showHomeView();
    });
    
    // Función unificada para seleccionar materia
    const selectSubject = (event, subjectKey) => {
        event.preventDefault();
        renderSubjectHub(courseStructure[subjectKey]);
        if (navLinks.classList.contains('active')) hamburger.click();
    };
    
    // Listeners para Física
    navFisicaLink.addEventListener('click', (e) => selectSubject(e, 'fisica'));
    selectFisicaBtn.addEventListener('click', (e) => selectSubject(e, 'fisica'));
    
    // ACTIVAMOS LOS BOTONES DE QUÍMICA
    navQuimicaLink.classList.remove('disabled-link');
    selectQuimicaBtn.disabled = false;
    
    // Listeners para Química
    navQuimicaLink.addEventListener('click', (e) => selectSubject(e, 'quimica'));
    selectQuimicaBtn.addEventListener('click', (e) => selectSubject(e, 'quimica'));
}

// --- PUNTO DE ENTRADA DE LA APLICACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    console.log('panita.ciencia listo y optimizado.');
    initModal();
    setupEventListeners();
});