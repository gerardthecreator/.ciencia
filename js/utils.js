// js/utils.js

/**
 * Alias para document.querySelector
 * @param {string} selector - El selector CSS
 * @returns {Element|null}
 */
export const $ = (selector) => document.querySelector(selector);

/**
 * Alias para document.querySelectorAll
 * @param {string} selector - El selector CSS
 * @returns {NodeListOf<Element>}
 */
export const $$ = (selector) => document.querySelectorAll(selector);