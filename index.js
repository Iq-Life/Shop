import express from 'express';
import mongoose from 'mongoose';

import { registerValidation } from './validation/auth.js';
import * as UserController from './controllers/UserController.js'

import checkAuth from './utils/checkAuth.js'

mongoose.connect('mongodb+srv://admin:QWEqwe123@cluster0.txj1xrv.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err.message))

const app = express()

app.use(express.json())

app.get('/auth/me', checkAuth, UserController.getMe)

app.post('/auth/login', registerValidation, UserController.login)

app.post('/auth/register', registerValidation, UserController.register)

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server Ok');
});
