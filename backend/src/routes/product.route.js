import { Router } from "express";
import { addProduct, getProductById, getProducts, updateProduct } from "../controllers/product.controller.js"

const productRoutes = Router();

productRoutes.get('/', getProducts);
productRoutes.get('/:id', getProductById);
productRoutes.post('/', addProduct);
productRoutes.put('/:id', updateProduct);

export default productRoutes;