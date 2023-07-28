import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";
import { User } from "./user.model.js";

const Bootcamp = sequelize.define('Bootcamp', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cue: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                args: [5, 10],
                msg: "El valor del CUE debe ser un número entero entre 5 y 10 dígitos.",
            },
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'bootcamps',
    

});

export {
    Bootcamp
};