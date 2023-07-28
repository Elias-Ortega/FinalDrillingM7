import { Sequelize } from "sequelize";

 export const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/db_bootcamp');


 (async () =>{
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error('Incapaz de conectarse a la base de datos', error);
  }


 })();
 