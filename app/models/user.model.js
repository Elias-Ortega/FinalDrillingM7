import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";
import { Bootcamp } from "./bootcamp.model.js";


const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {                
                msg: "Email no cumple con el formato requerido.",
            },
        },
    }

}, {
    tableName: 'users',
    
});



  

export {
    User
};

