// js/Fisica/Primer-parcial/structure.js

export const fisica_structure = {
    title: "Física I",
    partials: [
        {
            title: "Primer Parcial",
            topics: [
                { id: 'tema0-vectores', title: "Medidas y Vectores", module: () => import('./Tema0/structure.js') },
                { id: 'tema1-cinematica', title: "Cinemática en Una Dimensión", module: () => import('./Tema1/structure.js') },
                { id: 'tema2-movimiento2d', title: "Movimiento en 2 y 3 Dimensiones", module: () => import('./Tema2/structure.js') },
                { id: 'parcial1-resuelto', title: "⭐ Parcial Resuelto ⭐", module: () => import('./Parcial-Resuelto/structure.js') },
                { id: 'auto-parcial1', title: "🚀 Auto-Parcial de Práctica 🚀", module: () => import('./Auto-Parcial/structure.js') }
            ]
        },
        {
            title: "Segundo Parcial",
            topics: [
                { id: 'tema3-dinamica', title: "Leyes de Newton y DCL", module: () => import('../Segundo-parcial/Tema3/structure.js') },
                { id: 'tema4-ejercicios-dcl', title: "Ejercicios Prácticos de Dinámica", module: () => import('../Segundo-parcial/Tema4/structure.js') },
                { id: 'tema5-fuerzas-avanzadas', title: "Fuerzas Avanzadas y Movimiento General", module: () => import('../Segundo-parcial/Tema5/structure.js') },
                { id: 'tema6-ejercicios-avanzados', title: "Ejercicios Avanzados de Dinámica", module: () => import('../Segundo-parcial/Tema6/structure.js') }
            ]
        },
        {
            title: "Tercer Parcial",
            topics: [
                { 
                    id: 'tema7-trabajo-energia', 
                    title: "Trabajo y Energía Cinética", 
                    module: () => import('../Tercer-parcial/Tema7/structure.js')
                },
                {
                    id: 'tema8-ejercicios-trabajo',
                    title: "Ejercicios de Trabajo y Energía",
                    module: () => import('../Tercer-parcial/Tema8/structure.js')
                },
                {
                    id: 'parcial3-resuelto',
                    title: "⭐ Parcial Resuelto ⭐",
                    module: () => import('../Tercer-parcial/Parcial-Resuelto/structure.js')
                },
                // --- ¡NUEVA ENTRADA AQUÍ! ---
                {
                    id: 'auto-parcial3',
                    title: "🚀 Auto-Parcial de Práctica 🚀",
                    module: () => import('../Tercer-parcial/Auto-Parcial/structure.js')
                }
            ]
        }
    ]
};