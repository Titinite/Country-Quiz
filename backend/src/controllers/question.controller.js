import * as questionService from '../services/question.service.js';

/**
 * Récupère toutes les questions d'un niveau - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const getQuestionsByLevel = async (req, res) => {
  try {
    const questions = await questionService.getLevelWithQuestions(req.params.levelId);
    res.status(200).json(questions);
  } catch (err) {
    console.error('Erreur getQuestionsByLevel :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Récupère une question avec ses réponses - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const getQuestionById = async (req, res) => {
  try {
    const question = await questionService.getQuestionWithAnswers(req.params.questionId);
    if (!question) {
      return res.status(404).json({ message: 'Question introuvable' });
    }
    res.status(200).json(question);
  } catch (err) {
    console.error('Erreur getQuestionById :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};