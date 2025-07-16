// product.service.js

import productModel from '../models/product.model.js';

const getAllProducts = () => {
    return productModel.getAllProducts();
}

const getProductById = (id) => {
    return productModel.getProductById(id);
}

const addProduct = (product) => {
    productModel.addProduct(product);
}

export default {
    getAllProducts, getProductById, addProduct
}
