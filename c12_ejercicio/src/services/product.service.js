// product.service.js

const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 },
    { id: 4, name: 'Producto 4', price: 400 },
    { id: 5, name: 'Producto 5', price: 500 }
];

const getAllProducts = () => {
    return products;
}

const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
}

export default {
    getAllProducts, getProductById
}
