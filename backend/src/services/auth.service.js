import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../config/db.js';

/**
 * Vérifie si un utilisateur existe avec l'email ou le nom d'utilisateur
 * @param {string} email Email de l'utilisateur
 * @param {string} username Nom d'utilisateur de l'utilisateur
 * @returns {object} L'utilisateur trouvé ou null si pas trouvé
 */
export const findUserByEmailOrUsername = (email, username) =>
  db('users').where('email', email).orWhere('username', username).first();

/**
 * Vérifie si un utilisateur existe avec l'email
 * @param {string} email Email de l'utilisateur
 * @returns {object} L'utilisateur trouvé ou null si pas trouvé
 */
export const findUserByEmail = (email) =>
  db('users').where('email', email).first();

/**
 * Crée un nouvel utilisateur
 * @param {string} username Nom d'utilisateur de l'utilisateur
 * @param {string} email Email de l'utilisateur
 * @param {string} password Mot de passe de l'utilisateur
 * @returns {object} L'utilisateur créé
 */
export const createUser = async (username, email, password) => {
  const password_hash = await bcrypt.hash(password, 10);
  const [user] = await db('users')
    .insert({ username, email, password_hash })
    .returning(['id', 'username', 'email']);
  return user;
};

/**
 * Vérifie si un mot de passe est valide
 * @param {string} password Mot de passe à vérifier
 * @param {string} hash Hash du mot de passe
 * @returns {boolean} True si le mot de passe est valide, false sinon
 */
export const verifyPassword = (password, hash) =>
  bcrypt.compare(password, hash);

/**
 * Génère un token JWT pour l'utilisateur
 * @param {number} userId ID de l'utilisateur
 * @returns {string} Le token JWT
 */
export const generateToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });