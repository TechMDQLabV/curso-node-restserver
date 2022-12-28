const { response } = require('express');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-jwt');
const User = require('../models/user.model');

const login = async(req, res = response) => {
    const { email, password } = req.body;

    try{
        // verificar si el email existe
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                msg: 'User o password incorectos'
            });
        }

        // si el usuario está activo
        if(!user.state){
            return res.status(400).json({
                msg: 'El usuario no está activo'
            });
        }

        //verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, user.password);
        if(!validPassword){
            return res.status(400).json({
                msg: 'El password no es correcto'
            });            
        }

        // generar el jwt
        const token = await generateJWT( user.id );

        res.json({
            user,
            token
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
};

module.exports = {
     login
};