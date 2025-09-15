import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
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
}