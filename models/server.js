const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

class Server {
    constructor(){
        this.app = express();
        this.port = 5000;

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

        this.app.get('/', (req, res) => res.send(`${this.port} Proyecto DB`));
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    routes(){
        this.app.use('/users', require('../routes/users'));
        this.app.use('/appointments', require('../routes/appointments'));
        this.app.use('/medics', require('../routes/medics'));
        this.app.use('/patients', require('../routes/patients'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('SERVER ', this.port);
        });
    }
}


module.exports = Server;


