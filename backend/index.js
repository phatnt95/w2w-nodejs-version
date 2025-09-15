import express from 'express';
// import dotenv from "dotenv";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/routes.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { errorHandler } from './src/middleware/error.middleware.js';

const app = express();
const port = 3001;

// load file .env
// dotenv.config();

// mongoose connection
mongoose.Promise = global.Promise;
// mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/fashiondb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    if (req.headers && req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, 'RESTFULAPIS', (err, decoded) => {
            if (err) req.user = undefined;
            req.user = decoded;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});


// serving static files
app.use(express.static('public'));

// routes setup
routes(app);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send(`NodeJS with Express is running on port ${port}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
