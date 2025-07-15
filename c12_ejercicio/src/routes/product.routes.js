// product.routes.js

import { Router } from 'express';
import productController from '../controllers/product.controller.js';

const router = Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

export default router;