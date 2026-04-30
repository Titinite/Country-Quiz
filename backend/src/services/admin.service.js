import db from '../config/db.js';

/**
 * Récupère tous les utilisateurs
 * @returns {object[]} Les utilisateurs trouvés
 */
export const getAllUsers = () =>
  db('users').select('id', 'username', 'email', 'role', 'total_stars', 'created_at').orderBy('created_at', 'desc');

/**
 * Modifie le rôle d'un utilisateur
 * @param {number} userId ID de l'utilisateur
 * @param {string} role Le nouveau rôle de l'utilisateur
 * @returns {object} L'utilisateur mis à jour
 */
export const updateUserRole = (userId, role) =>
  db('users').where('id', userId).update({ role }).returning('id', 'username', 'role');

/**
 * Supprime un utilisateur
 * @param {number} userId ID de l'utilisateur
 * @returns {object} L'utilisateur supprimé
 */
export const deleteUser = (userId) =>
  db('users').where('id', userId).delete();


/**
 * Crée un nouveau chapitre
 * @param {object} data Les données du chapitre à créer
 * @returns {object} Le chapitre créé
 */
export const createChapter = (data) =>
  db('chapters').insert(data).returning('*');

/**
 * Modifie un chapitre
 * @param {number} id ID du chapitre
 * @param {object} data Les données du chapitre à modifier
 * @returns {object} Le chapitre modifié
 */
export const updateChapter = (id, data) =>
  db('chapters').where('id', id).update(data).returning('*');

/**
 * Supprime un chapitre
 * @param {number} id ID du chapitre
 * @returns {object} Le chapitre supprimé
 */
export const deleteChapter = (id) =>
  db('chapters').where('id', id).delete();


/**
 * Crée un nouveau niveau
 * @param {object} data Les données du niveau à créer
 * @returns {object} Le niveau créé
 */
export const createLevel = (data) =>
  db('levels').insert(data).returning('*');

/**
 * Modifie un niveau
 * @param {number} id ID du niveau
 * @param {object} data Les données du niveau à modifier
 * @returns {object} Le niveau modifié
 */
export const updateLevel = (id, data) =>
  db('levels').where('id', id).update(data).returning('*');

/** 
 * Supprime un niveau
 * @param {number} id ID du niveau
 * @returns {object} Le niveau supprimé
 */
export const deleteLevel = (id) =>
  db('levels').where('id', id).delete();


/**
 * Crée une nouvelle question
 * @param {object} data Les données de la question à créer
 * @returns {object} La question créée
 */
export const createQuestion = (data) =>
  db('questions').insert(data).returning('*');

/**
 * Modifie une question
 * @param {number} id ID de la question
 * @param {object} data Les données de la question à modifier
 * @returns {object} La question modifiée
 */
export const updateQuestion = (id, data) =>
  db('questions').where('id', id).update(data).returning('*');

/** 
 * Supprime une question
 * @param {number} id ID de la question
 * @returns {object} La question supprimée
 */
export const deleteQuestion = (id) =>
  db('questions').where('id', id).delete();


/**
 * Crée une nouvelle réponse
 * @param {object} data Les données de la réponse à créer
 * @returns {object} La réponse créée
 */
export const createAnswer = (data) =>
  db('answers').insert(data).returning('*');

/**
 * Modifie une réponse
 * @param {number} id ID de la réponse
 * @param {object} data Les données de la réponse à modifier
 * @returns {object} La réponse modifiée
 */
export const updateAnswer = (id, data) =>
  db('answers').where('id', id).update(data).returning('*');

/**
 * Supprime une réponse
 * @param {number} id ID de la réponse
 * @returns {object} La réponse supprimée
 */
export const deleteAnswer = (id) =>
  db('answers').where('id', id).delete();