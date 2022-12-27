const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config.js');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // Conectar a DB
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi app
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    middlewares(){
        // cors
        this.app.use( cors() );

        // lectura y parseo del body
        this.app.use( express.json() );

        // directorio publico
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use( this.usersPath, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: ' + this.port);
        });        
    }
}

module.exports = Server;