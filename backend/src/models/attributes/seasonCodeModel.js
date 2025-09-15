import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SeasonCodeSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a season code',
    unique: true
  }
});

// export default mongoose.model('SeasonCode', SeasonCodeSchema);
