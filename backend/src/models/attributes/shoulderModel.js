import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ShoulderSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a shoulder name',
    unique: true
  },
  description: String
});