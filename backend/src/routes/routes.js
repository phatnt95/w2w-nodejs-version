import productRoutes from "../routes/product.route.js";
import attributeRoutes from "./attribute.route.js";
import authRoutes from "./auth.route.js";
import inventoryRoutes from "./inventory.route.js";

const routes = (app) => {
    app.use('/auth', authRoutes);
    app.use('/products', productRoutes);
    app.use('/attributes', attributeRoutes);
    app.use("/inventories", inventoryRoutes);
}

export default routes;