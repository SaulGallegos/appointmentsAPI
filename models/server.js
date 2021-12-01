const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

class Server {
    constructor(){
        this.app = express();
        this.port = 5000;

        // Connect DB
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

        this.app.get('/', (req, res) => res.send(`${this.port} Proyecto DB`));
    }

    async connectDB(){
        const seq = await new Sequelize('postgres://postgres:postgres@localhost:5432/appointmentsdb');
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    routes(){
        this.app.use('/users', require('../routes/users'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('SERVER ', this.port);
        });
    }
}


module.exports = Server;


