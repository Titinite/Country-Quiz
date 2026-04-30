import * as adminService from '../services/admin.service.js';

/**
 * Récupère tous les utilisateurs - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await adminService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error('Erreur getAllUsers :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Modifie le rôle d'un utilisateur - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const updateUserRole = async (req, res) => {
  try {
    const [user] = await adminService.updateUserRole(req.params.id, req.body.role);
    res.status(200).json(user);
  } catch (err) {
    console.error('Erreur updateUserRole :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Supprime un utilisateur - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const deleteUser = async (req, res) => {
  try {
    await adminService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (err) {
    console.error('Erreur deleteUser :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};


/**
 * Crée un nouveau chapitre - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP 
 */
export const createChapter = async (req, res) => {
  try {
    const [chapter] = await adminService.createChapter(req.body);
    res.status(201).json(chapter);
  } catch (err) {
    console.error('Erreur createChapter :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Modifie un chapitre - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const updateChapter = async (req, res) => {
  try {
    const [chapter] = await adminService.updateChapter(req.params.id, req.body);
    res.status(200).json(chapter);
  } catch (err) {
    console.error('Erreur updateChapter :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Supprime un chapitre - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const deleteChapter = async (req, res) => {
  try {
    await adminService.deleteChapter(req.params.id);
    res.status(204).send();
  } catch (err) {
    console.error('Erreur deleteChapter :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};


/**
 * Crée un nouveau niveau - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const createLevel = async (req, res) => {
  try {
    const [level] = await adminService.createLevel(req.body);
    res.status(201).json(level);
  } catch (err) {
    console.error('Erreur createLevel :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Modifie un niveau - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const updateLevel = async (req, res) => {
  try {
    const [level] = await adminService.updateLevel(req.params.id, req.body);
    res.status(200).json(level);
  } catch (err) {
    console.error('Erreur updateLevel :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Supprime un niveau - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const deleteLevel = async (req, res) => {
  try {
    await adminService.deleteLevel(req.params.id);
    res.status(204).send();
  } catch (err) {
    console.error('Erreur deleteLevel :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};


/**
 * Crée une nouvelle question - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const createQuestion = async (req, res) => {
  try {
    const [question] = await adminService.createQuestion(req.body);
    res.status(201).json(question);
  } catch (err) {
    console.error('Erreur createQuestion :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Modifie une question - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const updateQuestion = async (req, res) => {
  try {
    const [question] = await adminService.updateQuestion(req.params.id, req.body);
    res.status(200).json(question);
  } catch (err) {
    console.error('Erreur updateQuestion :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Supprime une question - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const deleteQuestion = async (req, res) => {
  try {
    await adminService.deleteQuestion(req.params.id);
    res.status(204).send();
  } catch (err) {
    console.error('Erreur deleteQuestion :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};


/**
 * Crée une nouvelle réponse - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const createAnswer = async (req, res) => {
  try {
    const [answer] = await adminService.createAnswer(req.body);
    res.status(201).json(answer);
  } catch (err) {
    console.error('Erreur createAnswer :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Modifie une réponse - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const updateAnswer = async (req, res) => {
  try {
    const [answer] = await adminService.updateAnswer(req.params.id, req.body);
    res.status(200).json(answer);
  } catch (err) {
    console.error('Erreur updateAnswer :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Supprime une réponse - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const deleteAnswer = async (req, res) => {
  try {
    await adminService.deleteAnswer(req.params.id);
    res.status(204).send();
  } catch (err) {
    console.error('Erreur deleteAnswer :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};