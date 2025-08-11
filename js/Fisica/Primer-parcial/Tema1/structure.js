// js/Fisica/Primer-parcial/Tema1/structure.js

import { teoria } from './Teoria.js';
import { parte1 } from './Parte1.js';
import { parte2 } from './Parte2.js';
import { parte3 } from './Parte3.js';
import { quiz } from './Quiz.js';

// Este es el objeto que antes se llamaba 'fisica_tema1'
export const tema = {
 title: "Movimiento en Una Dimensión",
 teoria: teoria,
 parts: [parte1, parte2, parte3],
 quiz: quiz
};