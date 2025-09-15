import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BrandSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a brand name',
    unique: true
  },
  country: {
    type: String
  },
  founded: {
    type: Number
  }
});
