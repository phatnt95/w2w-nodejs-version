import mongoose from "mongoose";
import { ProductSchema } from '../models/productModel.js'

const Product = mongoose.model('Product', ProductSchema);

export const addProduct = (req, res, next) => {
    // handle blank value
    const body = { ...req.body };
    console.log(body);
    console.log(req.body);
    for (var key of Object.keys(body)) {
        body[key] = body[key] === '' ? null : body[key];
    }
    console.log(body);
    let newProduct = new Product(req.body);
    newProduct.save((err, Product) => {
        if (err) {
            console.log(err);

            res.send(err);
        }
        res.json(Product);
    });
}

export const getProducts = (req, res, next) => {
    Product.find({}, (err, products) => {
        if (err) {
            res.send(err);
        }
        res.json(products);
    });
}

export const getProductById = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
};

export const updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
}