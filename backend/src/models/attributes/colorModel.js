import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ColorSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a color name',
    unique: true
  },
  hexCode: String,
  rgb: {
    r: Number,
    g: Number,
    b: Number
  }
});

// export default mongoose.model('Color', ColorSchema);
