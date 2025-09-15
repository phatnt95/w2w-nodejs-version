import Product from '../models/product/product.model.js'

export const create = async (data) => {
    const product = new Product(data);
    return await product.save();
}

export const findAll = () => {
    console.log(Product);
    const products = Product.find().lean();
    return products;
}

export const findById = (id) => {
    const product = Product.findById(id).lean();
    return product;
};

export const update = async (id, data) => {
    return await Product.findOneAndUpdate({ _id: id }, data);
}