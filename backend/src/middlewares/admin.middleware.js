import db from '../config/db.js';

/**
 * Middleware pour vérifier que l'utilisateur est un admin
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 * @param {function} next Fonction pour passer au middleware suivant    
 */
export const requireAdmin = async (req, res, next) => {
  try {
    const user = await db('users').where('id', req.user.id).first();
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Accès refusé' });
    }
    next();
  } catch (err) {
    console.error('Erreur requireAdmin :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};