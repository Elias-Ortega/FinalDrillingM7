import express from 'express';
import morgan from "morgan";
import { routerUsers } from '../routes/user.routes.js';
import { routerBootcamps } from '../routes/bootcamp.routes.js';


export default class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();   
    }

    //middlewares
    middlewares(){   
        this.app.use(express.static('public')) ;  
        this.app.use(morgan("tiny"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));   
    }

    // rutas
    routes(){
        this.app.use('/users', routerUsers);
        this.app.use('/bootcamps',routerBootcamps);
        
    }

    
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }
}