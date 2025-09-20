import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TypeSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a type name',
    unique: true
  }
});

export default mongoose.model('Type', TypeSchema);