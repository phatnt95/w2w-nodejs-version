import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/routes.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import path from "path";
import connectDatabase from './src/config/database.js';
import corsMiddleware from "./src/config/cors.js";
import { errorHandler } from './src/middleware/error.middleware.js';

const app = express();
const port = 3002;

// load environment file depending on NODE_ENV
dotenv.config({
    path: process.env.NODE_ENV === "production" ? ".env.production" : ".env.development",
});

connectDatabase();


// body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(corsMiddleware);
// app.use(cors());

// app.use((req, res, next) => {
//     if (req.headers && req.headers.authorization) {
//         const token = req.headers.authorization.split(' ')[1];
//         jwt.verify(token, 'RESTFULAPIS', (err, decoded) => {
//             if (err) req.user = undefined;
//             req.user = decoded;
//             next();
//         });
//     } else {
//         req.user = undefined;
//         next();
//     }
// });


// serving static files
// app.use(express.static('public'));
// Serve images folder
app.use("/public/uploads", express.static(path.join(__dirname, "public/uploads")));

// routes setup
routes(app);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send(`NodeJS with Express is running on port ${port}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
