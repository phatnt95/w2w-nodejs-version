import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StyleSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a style name',
    unique: true
  },
  description: String
});

export default mongoose.model('Style', StyleSchema);
