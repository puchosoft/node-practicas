import { generateToken } from '../utils/token.js';

// Usuario por defecto hardcodeado
// Eliminar este usuario en producción
const defaultUser = {
    id: 1,
    email: 'cuenta@dominio.com',
    password: '123456'
};

export const login = async (req, res) => {
    const { email, password } = req.body || {};

    // Verificar si el usuario existe y la contraseña es correcta
    // En un caso real, deberías consultar una base de datos mediante el servicio de usuario
    if (email === defaultUser.email && password === defaultUser.password) {
        const token = generateToken({ id: defaultUser.id, email: defaultUser.email });
        return res.status(200).json({ token });
    }

    // Si las credenciales son incorrectas, devolver un error
    return res.status(401).json({ message: 'Credenciales inválidas' });
}

export const register = async (req, res) => {
    const { email, password } = req.body || {};

    // Aquí se debe implementar la lógica para registrar un nuevo usuario
    // Por ejemplo, guardar el usuario en una base de datos

    // Respuesta simulada de éxito
    // return res.status(201).json({ message: 'Usuario registrado exitosamente' });
    return res.status(201).json({ message: 'Registro SIMULADO exitosamente' });
}
