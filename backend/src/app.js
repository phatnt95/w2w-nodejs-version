import express from "express";
import path from "path";
import bodyParser from 'body-parser';
import cors from "./config/cors.js";
import routes from "./routes/routes.js";
import { errorHandler } from './middleware/error.middleware.js';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware
app.use(cors);
app.use(errorHandler);

// Serve static files (uploads)
app.use("/public/uploads", express.static(path.join(__dirname, "../public/uploads")));
// Routes
routes(app);

export default app;
