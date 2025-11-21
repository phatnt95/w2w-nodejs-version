import mongoose from "mongoose";

const CabinetSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Tên tủ, ví dụ: "Tủ áo sơ mi", "Tủ đồ thể thao"
    storage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Storage",
        required: true,
    },
    material: {
        type: String,
        enum: ["wood", "plastic", "metal"],
        default: "wood",
    },
    color: { type: String },
    size: {
        // Kích thước vật lý
        height: Number,
        width: Number,
        depth: Number,
    },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Cabinet", CabinetSchema);
