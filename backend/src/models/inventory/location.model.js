import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
	code:{type:String, require:'Enter location code.'},
	name:{type:String, require:'Enter location name.'},
	createdAt: {
		type: Date,
		default: Date.now,
	}
});

export default mongoose.model('Location', LocationSchema);