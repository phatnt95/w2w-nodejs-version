// import mongoose from "mongoose";


// const connectDatabase = () => {
//     try {
//         mongoose.connect(process.env.MONGO_URI, {
//             dbName: process.env.DB_NAME || "mydb",
//         });
//         console.log("✅ MongoDB connected");
//     } catch (err) {
//         console.error("❌ MongoDB connection failed:", err.message);
//         process.exit(1); // stop app if connect failed.
//     }
// }


// export default connectDatabase;