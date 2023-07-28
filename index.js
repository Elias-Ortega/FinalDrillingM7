import 'dotenv/config';
import Server from './app/models/server.js';

//instancia de la clase Server
const server = new Server();

//se llama a listen
server.listen();
