const { Role, User, Product } = require('../models');

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

const existIdUser = async ( id ) => {
    const exist = await User.findById( id );
    if(!exist){
        throw new Error(`El ID ${id} no existe`);
    }
};

const existIdCategory = async ( id ) => {
    const exist = await Category.findById( id );
    if(!exist){
        throw new Error(`El ID ${id} no existe`);
    }
};

const existIdProduct = async ( id ) => {
    const exist = await Product.findById( id );
    if(!exist){
        throw new Error(`El ID ${id} no existe`);
    }
};

module.exports = {
    isValidRole,
    existEmail,
    existIdUser,
    existIdCategory,
    existIdProduct
};