// product.controller.js
import e from 'express';
import productService from '../services/product.service.js';

const getAllProducts = (req, res) => {
    const products = productService.getAllProducts();
    if (!products || products.length === 0) {
        res.status(404).json({ message: 'No hay productos disponibles' });
    } else {
        res.status(200).json({ message: 'Lista de productos', payload: products });
    }
};

const getProductById = (req, res) => {
    const { id } = req.params;
    const product=productService.getProductById(id);
    if (!product) {
        res.status(404).json({ message: `Producto con ID: ${id} no encontrado` });
    } else {
        res.status(200).json({ message: `Producto con ID: ${id}`, payload: product });
    }
};

export default {
    getAllProducts, getProductById
};
