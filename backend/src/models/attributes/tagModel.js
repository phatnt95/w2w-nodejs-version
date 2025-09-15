import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TagSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a tag name',
    unique: true
  }
});

// export default mongoose.model('Tag', TagSchema);
