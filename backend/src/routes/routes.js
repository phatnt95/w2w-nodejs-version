import productRoutes from "../routes/product.route.js";
import attributeRoutes from "./attribute.route.js";
import authRoutes from "./auth.route.js";

const routes = (app) => {
    app.use('/auth', authRoutes);
    app.use('/products', productRoutes);
    app.use('/attributes', attributeRoutes);
}

export default routes;