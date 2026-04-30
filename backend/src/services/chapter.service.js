import db from '../config/db.js';

/**
 * Récupère tous les chapitres
 * @returns {object[]} Les chapitres
 */
export const getAllChapters = () =>
  db('chapters').orderBy('order_index');

/**
 * Récupère un chapitre par son ID
 * @param {number} id ID du chapitre
 * @returns {object} Le chapitre trouvé ou null si pas trouvé
 */
export const getChapterById = (id) =>
  db('chapters').where('id', id).first();

/**
 * Récupère les niveaux d'un chapitre
 * @param {number} chapterId ID du chapitre
 * @returns {object[]} Les niveaux trouvés
 */
export const getLevelsByChapter = (chapterId) =>
  db('levels').where('chapter_id', chapterId).orderBy('order_index');

/**
 * Récupère un niveau par son ID
 * @param {number} id ID du niveau
 * @returns {object} Le niveau trouvé ou null si pas trouvé
 */
export const getLevelById = (id) =>
  db('levels').where('id', id).first();