import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { validationResult } from 'express-validator';

import { registerValidation } from './validation/auth.js';

mongoose.connect('mongodb+srv://admin:<password>@cluster0.txj1xrv.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log('DB ok'))
.catch((err) => console.log('DB error', err.message))

const app = express()

app.use(express.json())

app.post('/auth/register', registerValidation, (req,res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        return res.status(400).json(errors.array())
    }

    res.json({
        success: true,
        // token: 
    })
})

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server Ok');
});
