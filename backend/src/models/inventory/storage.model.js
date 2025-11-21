import mongoose from "mongoose";

const StorageSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Tên kho, ví dụ: "Tủ chính", "Kho quần áo mùa đông"
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location",
        required: true,
    },
    type: {
        type: String,
        enum: ["wardrobe", "warehouse", "drawer"],
        default: "wardrobe",
    },
    capacity: { type: Number }, // Dung tích hoặc số lượng tủ tối đa
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Storage", StorageSchema);
