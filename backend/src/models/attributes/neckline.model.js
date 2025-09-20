import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NecklineSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a neckline type',
    unique: true
  }
});

export default mongoose.model('Neckline', NecklineSchema);
