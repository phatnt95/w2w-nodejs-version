import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const OccasionSchema = new Schema({
  name: {
    type: String,
    required: 'Enter an occasion type',
    unique: true
  }
});

// export default mongoose.model('Occasion', OccasionSchema);
