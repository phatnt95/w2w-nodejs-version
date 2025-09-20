import { Router } from "express";
import { addProduct, getProductById, getProducts, updateProduct } from "../controllers/product.controller.js"
import { upload } from "../middleware/multer.middleware.js";

const productRoutes = Router();

productRoutes.get('/', getProducts);
productRoutes.get('/:id', getProductById);
productRoutes.post('/', upload.array("images", 5), addProduct);
productRoutes.put('/:id', updateProduct);

export default productRoutes;