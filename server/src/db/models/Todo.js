import {Sequelize} from "sequelize";
import sequelize from "../connection";

let Todo = sequelize.define('todos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    text: Sequelize.STRING(100),
    completed: Sequelize.BOOLEAN,
    editable: Sequelize.BOOLEAN,
    visible: Sequelize.BOOLEAN,
    deleted: Sequelize.BOOLEAN,
    time:Sequelize.DATE,
    userid:Sequelize.INTEGER
}, {
    timestamps: false
});

export default Todo;