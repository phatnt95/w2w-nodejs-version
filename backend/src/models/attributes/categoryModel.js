import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CategorySchema = new Schema({
  name: {
    type: String,
    required: 'Enter a category name',
    unique: true
  },
  parent: { type: Schema.Types.ObjectId, ref: 'Category' } // hierarchical
});

// export default mongoose.model('Category', CategorySchema);
