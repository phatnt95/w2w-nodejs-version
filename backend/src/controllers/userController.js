import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserSchema } from '../models/userModel.js';

const User = mongoose.model('User', UserSchema);

export const loginRequired = (req, res, next) => {
    if (!req.user) {
        return res.status(400).send({ message: 'Unauthorized user!' });
    }
    next();
};

export const register = (req, res) => {
    let newUser = new User(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
    newUser.save((err, user) => {
        if (err) {
            res.status(400).send({message:err});
        }
        res.hashPassword = undefined;
        res.json(user);
    });
};

export const login = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) throw err;
        if(!user) {
            return res.status(401).send({message: 'Authentication failed. User not found.'});
        }
        if(user){
            if(!user.comparePassword(req.body.password, user.hashPassword)) {
                return res.status(401).send({message: 'Authentication failed. Wrong password.'});
            } else {
                return res.json({token: jwt.sign({email: user.email, username: user.username}, 'RESTFULAPIS')});
            }
        }
    });
};
