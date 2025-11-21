import mongoose from "mongoose";

const BinSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Tên ngăn, ví dụ: "Ngăn đồ lót", "Ngăn áo phông"
    cabinet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cabinet",
        required: true,
    },
    type: { type: String, enum: ["drawer", "shelf", "box"], default: "drawer" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Bin", BinSchema);
