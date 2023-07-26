import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

const UserBootcamp = sequelize.define('UserBootcamp',{
    
    clave_primaria:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    
    user_id: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    bootcamp_id: {
        type:DataTypes.INTEGER,
        allowNull:false
    }
}, {
    tableName: 'user_bootcamp'
});

export {
    UserBootcamp
};