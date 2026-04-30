import db from '../config/db.js';

/**
 * Récupère tous les progrès d'un utilisateur
 * @param {number} userId ID de l'utilisateur
 * @returns {object[]} Les progrès trouvés
 */
export const getUserProgress = (userId) =>
  db('user_progress').where('user_id', userId);

/**
 * Récupère le progrès d'un niveau d'un utilisateur
 * @param {number} userId ID de l'utilisateur
 * @param {number} levelId ID du niveau
 * @returns {object} Le progrès trouvé ou null si pas trouvé
 */
export const getLevelProgress = (userId, levelId) =>
  db('user_progress').where({ user_id: userId, level_id: levelId }).first();

/**
 * Sauvegarde le progrès d'un niveau d'un utilisateur
 * @param {number} userId ID de l'utilisateur
 * @param {number} levelId ID du niveau
 * @param {number} starsEarned Nombre de stars gagnés
 * @returns {object} Le progrès créé
 */
export const saveProgress = async (userId, levelId, starsEarned) => {
  const existing = await getLevelProgress(userId, levelId);

  if (existing) {
    if (starsEarned <= existing.stars_earned) return existing;

    const [updated] = await db('user_progress')
      .where({ user_id: userId, level_id: levelId })
      .update({
        stars_earned: starsEarned,
        completed: true,
        completed_at: new Date(),
      })
      .returning('*');

    await updateTotalStars(userId);
    return updated;
  }

  const [created] = await db('user_progress')
    .insert({
      user_id: userId,
      level_id: levelId,
      stars_earned: starsEarned,
      completed: starsEarned > 0,
      completed_at: starsEarned > 0 ? new Date() : null,
    })
    .returning('*');

  await updateTotalStars(userId);
  return created;
};

/**
 * Met à jour le total des stars d'un utilisateur
 * @param {number} userId ID de l'utilisateur
 * @returns {object} L'utilisateur mis à jour
 */
const updateTotalStars = (userId) =>
  db('users')
    .where('id', userId)
    .update({
      total_stars: db('user_progress')
        .where('user_id', userId)
        .sum('stars_earned')
        .as('total'),
    });