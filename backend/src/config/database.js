import mongoose from "mongoose";


const connectDatabase = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.MONGO_DBNAME || "mydb",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB connected\n");
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err.message + '\n');
        process.exit(1); // stop app if connect failed.
    }
}


export default connectDatabase;