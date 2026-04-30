import * as progressService from '../services/progress.service.js';

/**
 * Récupère tous les progrès d'un utilisateur - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const getUserProgress = async (req, res) => {
  try {
    const progress = await progressService.getUserProgress(req.user.id);
    res.status(200).json(progress);
  } catch (err) {
    console.error('Erreur getUserProgress :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Récupère le progrès d'un niveau d'un utilisateur - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP 
 */
export const getLevelProgress = async (req, res) => {
  try {
    const progress = await progressService.getLevelProgress(req.user.id, req.params.levelId);
    if (!progress) {
      return res.status(404).json({ message: 'Progression introuvable' });
    }
    res.status(200).json(progress);
  } catch (err) {
    console.error('Erreur getLevelProgress :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Sauvegarde le progrès d'un niveau d'un utilisateur - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const saveProgress = async (req, res) => {
  const { levelId, starsEarned } = req.body;

  if (starsEarned < 0 || starsEarned > 3) {
    return res.status(400).json({ message: 'Les étoiles doivent être entre 0 et 3' });
  }

  try {
    const progress = await progressService.saveProgress(req.user.id, levelId, starsEarned);
    res.status(200).json(progress);
  } catch (err) {
    console.error('Erreur saveProgress :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};