import cors from 'cors';

const allowedOrigins = [
    process.env.CLIENT_URL, // frontend app
    "http://localhost:5173", // optional: vite dev
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};

export default cors(corsOptions);