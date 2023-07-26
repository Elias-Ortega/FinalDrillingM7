import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";
import { Bootcamp } from "./bootcamp.model.js";
import { UserBootcamp } from "./userBootcamp.model.js";

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
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
                args: true,
                msg: "Ingrese un formato de correo válido.",
            },
        },
    }

}, {
    tableName: 'users',
    
});

//relacion M:N
User.belongsToMany(Bootcamp, {
    through: UserBootcamp,
    foreignKey:'user_id'
});

Bootcamp.belongsToMany(User, {
    through: UserBootcamp,
    foreignKey: 'bootcamp_id'
});

/* sequelize.sync();  */

export {
    User
};

