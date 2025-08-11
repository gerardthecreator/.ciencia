// js/course-structure.js

/**
 * @file Mapa de Contenido Global de panita.ciencia
 * @description Este archivo es la ÚNICA fuente de verdad para la estructura de todas las materias y temas del sitio.
 * El controlador general ('general-control.js') lee este objeto para construir la navegación.
 * Cada 'module' utiliza una importación dinámica para cargar el contenido solo cuando es necesario (Lazy Loading).
 */

export const courseStructure = {
    
    //======================================================================
    //== ESTRUCTURA DE FÍSICA I
    //======================================================================
    fisica: {
        title: "Física I",
        partials: [
        {
            // --- PRIMER PARCIAL DE FÍSICA ---
            title: "Primer Parcial",
            topics: [
                { id: 'tema0-vectores', title: "Medidas y Vectores", module: () => import('./Fisica/Primer-parcial/Tema0/structure.js') },
                { id: 'tema1-cinematica', title: "Cinemática en Una Dimensión", module: () => import('./Fisica/Primer-parcial/Tema1/structure.js') },
                { id: 'tema2-movimiento2d', title: "Movimiento en 2 y 3 Dimensiones", module: () => import('./Fisica/Primer-parcial/Tema2/structure.js') },
                { id: 'parcial1-resuelto', title: "⭐ Parcial Resuelto ⭐", module: () => import('./Fisica/Primer-parcial/Parcial-Resuelto/structure.js') },
                { id: 'auto-parcial1', title: "🚀 Auto-Parcial de Práctica 🚀", module: () => import('./Fisica/Primer-parcial/Auto-Parcial/structure.js') }
            ]
        },
        {
            // --- SEGUNDO PARCIAL DE FÍSICA ---
            title: "Segundo Parcial",
            topics: [
                { id: 'tema3-dinamica', title: "Leyes de Newton y DCL", module: () => import('./Fisica/Segundo-parcial/Tema3/structure.js') },
                { id: 'tema4-ejercicios-dcl', title: "Ejercicios Prácticos de Dinámica", module: () => import('./Fisica/Segundo-parcial/Tema4/structure.js') },
                { id: 'tema5-fuerzas-avanzadas', title: "Fuerzas Avanzadas y Movimiento General", module: () => import('./Fisica/Segundo-parcial/Tema5/structure.js') },
                { id: 'tema6-ejercicios-avanzados', title: "Ejercicios Avanzados de Dinámica", module: () => import('./Fisica/Segundo-parcial/Tema6/structure.js') }
            ]
        },
        {
            // --- TERCER PARCIAL DE FÍSICA ---
            title: "Tercer Parcial",
            topics: [
                { id: 'tema7-trabajo-energia', title: "Trabajo y Energía Cinética", module: () => import('./Fisica/Tercer-parcial/Tema7/structure.js') },
                { id: 'tema8-ejercicios-trabajo', title: "Ejercicios de Trabajo y Energía", module: () => import('./Fisica/Tercer-parcial/Tema8/structure.js') },
                { id: 'parcial3-resuelto', title: "⭐ Parcial Resuelto ⭐", module: () => import('./Fisica/Tercer-parcial/Parcial-Resuelto/structure.js') },
                { id: 'auto-parcial3', title: "🚀 Auto-Parcial de Práctica 🚀", module: () => import('./Fisica/Tercer-parcial/Auto-Parcial/structure.js') }
            ]
        }]
    },
    
    //======================================================================
    //== ESTRUCTURA DE QUÍMICA I
    //======================================================================
    quimica: {
        title: "Química I",
        partials: [
            {
                // --- PRIMER PARCIAL DE QUÍMICA ---
                title: "Primer Parcial",
                topics: [
                    { id: 'quim-tema1-propiedades', title: "Propiedades de la Materia", module: () => import('./Quimica/Primer-parcial/Tema1/structure.js') },
                    { id: 'quim-tema2-atomos', title: "Átomos y Teoría Atómica", module: () => import('./Quimica/Primer-parcial/Tema2/structure.js') },
                    { id: 'quim-tema3-cuantica', title: "Teoría Cuántica y Estructura Electrónica", module: () => import('./Quimica/Primer-parcial/Tema3/structure.js') },
                    { id: 'quim-tema4-tabla', title: "Tabla Periódica y Propiedades", module: () => import('./Quimica/Primer-parcial/Tema4/structure.js') },
                    { id: 'parcial-quimica1-resuelto', title: "⭐ Parcial Resuelto (Química) ⭐", module: () => import('./Quimica/Primer-parcial/Parcial-Resuelto/structure.js') },
                    { id: 'auto-parcial-quimica1', title: "🚀 Auto-Parcial de Práctica (Química) 🚀", module: () => import('./Quimica/Primer-parcial/Auto-Parcial/structure.js') }
                ]
            }
            // Futuros parciales de química irían aquí
        ]
    },
    
    //======================================================================
    //== ESTRUCTURA DE MATEMÁTICA I (Placeholder)
    //======================================================================
    matematica: {
        title: "Matemática I",
        partials: [
        {
            title: "Primer Parcial",
            topics: [
                { id: 'mat-tema1', title: "Funciones y Límites (Próximamente)", module: null }
            ]
        }]
    }
};
