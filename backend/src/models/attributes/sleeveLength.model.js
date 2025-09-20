import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SleeveLengthSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a sleeve length',
        unique: true
    }
});

export default mongoose.model('SleeveLength', SleeveLengthSchema);
