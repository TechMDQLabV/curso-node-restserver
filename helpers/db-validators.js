const Role = require('../models/role');
const User = require('../models/user');

 const isValidRole = async (role = '') =>{
    const roleExist = await Role.findOne({ role });
    if( !roleExist ){
        throw new Error(`El rol ${ role } no está registrado`);
    }
};

const existEmail = async (email = '') => {
    const exist = await User.findOne({ email });
    if(exist){
        throw new Error(`El email ${email} ya está registrado`);
    }
};

const existIdUser = async (id ) => {
    const exist = await User.findById({ id });
    if(!exist){
        throw new Error(`El ID ${id} no existe`);
    }
};

module.exports = {
    isValidRole,
    existEmail,
    existIdUser
};