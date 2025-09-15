import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TypeSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a type name',
    unique: true
  }
});

// export default mongoose.model('Type', TypeSchema);
