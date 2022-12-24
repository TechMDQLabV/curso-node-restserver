const { response } = require('express');

const usersGet = (req, res = response) => {
    const { page = 1, limit = 10 } = req.query;

    res.json({
        msg: 'get API - controller',
        page,
        limit
    });
};

const usersPut = (req, res) => {
    const id = req.params.id;

    res.json({
        msg: 'put API - controller',
        id
    });
};

const usersPost = (req, res) => {
    const { name, age } = req.body;

    res.json({
        msg: 'post API - controller',
        name,
        age
    });
};

const usersPatch = (req, res) => {
    res.json({
        msg: 'patch API - controller'
    });
};

const usersDelete = (req, res) => {
    res.json({
        msg: 'delete API - controller'
    });
};

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersPatch,
    usersDelete
};