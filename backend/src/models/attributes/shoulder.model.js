import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ShoulderSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a shoulder name',
    unique: true
  },
  description: String
});

export default mongoose.model('Shoulder', ShoulderSchema);