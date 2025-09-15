import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const NecklineSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a neckline type',
    unique: true
  }
});

// export default mongoose.model('Neckline', NecklineSchema);
