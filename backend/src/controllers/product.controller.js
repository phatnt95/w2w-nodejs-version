import * as productService from '../services/product.service.js';
export const getProducts = async (req, res, next) => {
    try {
        const products = await productService.findAll();
        res.json(products);
    } catch (error) {
        next(error);
    }
}

export const getProductById = async (req, res, next) => {
    try {
        const product = await productService.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        next(error);
    }

}

export const addProduct = async (req, res, next) => {
    try {
        // Map files vào images[]
        const images = req.files.map((file, index) => ({
            path: `public/uploads/${file.filename}`,
            alt: req.body.alt ? req.body.alt[index] : "", // nếu client gửi alt[]
            isMain: index === 0 // đánh dấu ảnh đầu tiên làm main
        }));
        console.log(images);
        const reqBody = { ...req.body, images: images };
        console.log(reqBody);

        const product = await productService.create(reqBody);
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        const product = await productService.update(req.params.id, req.body);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        next(error);
    }
}

