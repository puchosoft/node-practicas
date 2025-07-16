import fs from 'fs';
import { __dirname, join } from '../utils/folder.js';

const dataPath = join(__dirname, 'data/products.json');

const getAllProducts = () => {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
}

const getProductById = (id) => {
    const products = getAllProducts();
    return products.find(product => product.id === parseInt(id));
}

const saveProducts = (products) => {
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2), 'utf-8');
}

const addProduct = (product) => {
    const products = getAllProducts();
    const productsIds = products.map(p => p.id);
    const newId = productsIds.length > 0 ? Math.max(...productsIds) + 1 : 1;
    const newProduct = {id:newId, ...product};
    products.push(newProduct);
    saveProducts(products);
}

export default {
    getAllProducts, getProductById, addProduct
};

