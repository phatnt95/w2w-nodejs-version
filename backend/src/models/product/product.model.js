import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, required: 'Enter a product name' },
    description: { type: String, required: false },
    price: { type: Number, required: "Enter a price" },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand', required: false },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: false },
    type: { type: Schema.Types.ObjectId, ref: 'Type', required: false },
    color: { type: Schema.Types.ObjectId, ref: 'Color', required: false },
    size: { type: Schema.Types.ObjectId, ref: 'Size', required: false },
    style: { type: Schema.Types.ObjectId, ref: 'Style', required: false },
    neckline: { type: Schema.Types.ObjectId, ref: 'Neckline', required: false },
    sleeveLength: { type: Schema.Types.ObjectId, ref: 'SleeveLength', required: false },
    shoulder: { type: Schema.Types.ObjectId, ref: 'Shoulder', required: false },
    occasion: { type: Schema.Types.ObjectId, ref: 'Occasion', required: false },
    seasonCode: { type: Schema.Types.ObjectId, ref: 'SeasonCode', required: false },
    tag: { type: Schema.Types.ObjectId, ref: 'Tag', required: false },
    images: [{
        path: { type: String },   // ví dụ: "/uploads/product1.jpg"
        alt: { type: String },    // mô tả ảnh
        isMain: { type: Boolean, default: false }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Product', ProductSchema);
