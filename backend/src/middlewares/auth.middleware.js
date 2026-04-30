import jwt from 'jsonwebtoken';

/**
 * Middleware d'authentification - Vérifie le token JWT
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 * @param {function} next Fonction pour passer au middleware suivant
 */
export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token manquant' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Erreur authenticate :', err);
    return res.status(401).json({ message: 'Token invalide ou expiré' });
  }
};