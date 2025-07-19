import jwt from 'jsonwebtoken';
import { envs } from '../config/envs.js';

const { jwtSecretKey } = envs;

export const generateToken = (userData) => {
    const user = { id: userData.id, email: userData.email };
    const expiration = { expiresIn: '10m' };
    const token = jwt.sign(user, jwtSecretKey, expiration);
    return token;
}

// console.log(generateToken({ id: '12345', email: 'perdoncho@dominio.com' }));

