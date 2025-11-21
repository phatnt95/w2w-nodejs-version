import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PlacementSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    location: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'locationModel' // This allows dynamic linking
    },
    locationModel: {
        type: String,
        required: true,
        enum: ['Storage', 'Bin', 'Cabinet'] // Must match your Model names
    }
});

export default mongoose.model('Placement', PlacementSchema);