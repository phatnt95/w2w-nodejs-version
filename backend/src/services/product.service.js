import Product from '../models/product/product.model.js'

export const create = async (data) => {
    const product = new Product(data);
    return await product.save();
}

export const findAll = async (queryParams) => {
    console.log(Product);
    const {
        brand,
        category,
        color,
        size,
        style,
        neckline,
        sleeveLength,
        shoulder,
        occasion,
        seasonCode,
        tag,
        type,
        priceMin,
        priceMax,
        page = 1,
        limit = 9,
    } = queryParams;

    // Build filter object
    const filter = {};
    if (brand) filter.brand = brand;
    if (category) filter.category = category;
    if (color) filter.color = color;
    if (size) filter.size = size;
    if (style) filter.style = style;
    if (neckline) filter.neckline = neckline;
    if (sleeveLength) filter.sleeveLength = sleeveLength;
    if (shoulder) filter.shoulder = shoulder;
    if (occasion) filter.occasion = occasion;
    if (seasonCode) filter.seasonCode = seasonCode;
    if (tag) filter.tag = tag;
    if (type) filter.type = type;
    if (priceMin || priceMax) {
        filter.price = {};
        if (priceMin) filter.price.$gte = Number(priceMin);
        if (priceMax) filter.price.$lte = Number(priceMax);
    }

    // Pagination
    const skip = (page - 1) * limit;


    // Query DB
    const [items, total] = await Promise.all([
        Product.find(filter)
            .populate("brand category color size style neckline sleeveLength shoulder occasion seasonCode tag type")
            .skip(skip)
            .limit(Number(limit)),
        Product.countDocuments(filter),
    ]);

    return {
        items,
        total,
        totalPages: Math.ceil(total / limit),
        currentPage: Number(page),
    };
    // const products = Product.find().lean();
    // return products;
}

export const findById = (id) => {
    const product = Product.findById(id).lean();
    return product;
};

export const update = async (id, data) => {
    return await Product.findOneAndUpdate({ _id: id }, data);
}