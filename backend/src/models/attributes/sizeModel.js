import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SizeSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a size name',
    unique: true
  },
  measurement: String // e.g., "Chest 38, Length 70"
});

// export default mongoose.model('Size', SizeSchema);
