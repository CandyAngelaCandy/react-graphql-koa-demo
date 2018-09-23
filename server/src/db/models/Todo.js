import {Sequelize} from "sequelize";
import sequelize from "../connection/connection";

export const Todo = sequelize.define('todos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    text: Sequelize.STRING(100),
    completed: Sequelize.BOOLEAN,
    editable: Sequelize.BOOLEAN,
    visible: Sequelize.BOOLEAN,
    deleted: Sequelize.BOOLEAN,
    time: Sequelize.DATE,
}, {
    timestamps: false
});