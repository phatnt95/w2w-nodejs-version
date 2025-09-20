import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BrandSchema = new Schema({
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

export default mongoose.model('Brand', BrandSchema);
