const {Router} = require('express');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = Router();

// /api/auth
router.post('/registr', async (req, res) => {
    try{
        const {email, passord} = req.body;

        const candidate = await User.findOne({email});
        if(candidate){
            return res.status(400).json({message: 'Пользователь с таким email уже существует'});
        }
        const hashedPassword = await bcrypt.hash(passord, 12);
        const user = new User({ email, passord: hashedPassword});
        await user.save();

        res.status(201).json({ message: 'Пользователь создан'});
        
    }catch(e){
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова!'})
    }
});

// /api/login
router.post('/login', async (req, res) => {

});

module.exports = router;