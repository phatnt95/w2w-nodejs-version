import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OccasionSchema = new Schema({
  name: {
    type: String,
    required: 'Enter an occasion type',
    unique: true
  }
});

export default mongoose.model('Occasion', OccasionSchema);
