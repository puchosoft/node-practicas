// authentication.js
import jwt from 'jsonwebtoken';
import { envs } from '../config/envs.js';

const { jwtSecretKey } = envs;

export const authentication = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado.' });
    }
    try {
        const decoded = jwt.verify(token, jwtSecretKey);
        req.user = decoded; // Guardar la información del usuario decodificada en el objeto de solicitud

    } catch (error) {
        return res.status(403).json({ message: 'Token inválido.' });
    }

    // Si el token es válido, continuar con la siguiente función de middleware
    next();
};
