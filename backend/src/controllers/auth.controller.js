import * as authService from '../services/auth.service.js';

/**
 * Enregistre un nouvel utilisateur - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existing = await authService.findUserByEmailOrUsername(email, username);
    if (existing) {
      return res.status(409).json({ message: 'Email ou nom d\'utilisateur déjà utilisé' });
    }

    const user = await authService.createUser(username, email, password);
    const token = authService.generateToken(user.id);

    res.status(201).json({ user, token });
  } catch (err) {
    console.error('Erreur register :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

/**
 * Connecte un utilisateur - Controller
 * @param {object} req Requête HTTP
 * @param {object} res Réponse HTTP
 */
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authService.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const valid = await authService.verifyPassword(password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const token = authService.generateToken(user.id);

    res.status(200).json({
      user: { id: user.id, username: user.username, email: user.email, total_stars: user.total_stars },
      token
    });
  } catch (err) {
    console.error('Erreur login :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};