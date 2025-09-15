import productRoutes from "../routes/product.route.js";

const routes = (app) => {
    app.use('/products', productRoutes);
}

export default routes;