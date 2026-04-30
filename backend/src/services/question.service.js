import db from '../config/db.js';

/**
 * Récupère toutes les questions d'un niveau
 * @param {number} levelId ID du niveau
 * @returns {object[]} Les questions trouvées   
 */
export const getQuestionsByLevel = (levelId) =>
  db('questions').where('level_id', levelId).orderBy('id');

/**
 * Récupère une question avec ses réponses
 * @param {number} questionId ID de la question
 * @returns {object} La question trouvée avec ses réponses
 */
export const getQuestionWithAnswers = async (questionId) => {
  const question = await db('questions').where('id', questionId).first();
  if (!question) return null;

  const answers = await db('answers')
    .where('question_id', questionId)
    .select('id', 'content', 'is_correct');

  return { ...question, answers };
};

/**
 * Récupère toutes les questions d'un niveau avec leurs réponses
 * @param {number} levelId ID du niveau
 * @returns {object[]} Les questions trouvées avec leurs réponses
 */
export const getLevelWithQuestions = async (levelId) => {
  const questions = await getQuestionsByLevel(levelId);

  const questionsWithAnswers = await Promise.all(
    questions.map((q) => getQuestionWithAnswers(q.id))
  );

  return questionsWithAnswers;
};