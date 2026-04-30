import * as chapterService from '../services/chapter.service.js';

/**
 * Récupère tous les chapitres - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const getAllChapters = async (req, res) => {
  try {
    const chapters = await chapterService.getAllChapters();
    res.status(200).json(chapters);
  } catch (err) {
    console.error('Erreur getAllChapters :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Récupère un chapitre par son ID - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const getChapterById = async (req, res) => {
  try {
    const chapter = await chapterService.getChapterById(req.params.id);
    if (!chapter) {
      return res.status(404).json({ message: 'Chapitre introuvable' });
    }
    res.status(200).json(chapter);
  } catch (err) {
    console.error('Erreur getChapterById :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Récupère les niveaux d'un chapitre - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const getLevelsByChapter = async (req, res) => {
  try {
    const levels = await chapterService.getLevelsByChapter(req.params.id);
    res.status(200).json(levels);
  } catch (err) {
    console.error('Erreur getLevelsByChapter :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Récupère un niveau par son ID - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const getLevelById = async (req, res) => {
  try {
    const level = await chapterService.getLevelById(req.params.levelId);
    if (!level) {
      return res.status(404).json({ message: 'Level introuvable' });
    }
    res.status(200).json(level);
  } catch (err) {
    console.error('Erreur getLevelById :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};