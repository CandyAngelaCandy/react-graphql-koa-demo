import {Sequelize} from "sequelize";
import sequelize from "../connection";

export let Todo = sequelize.define('todos', {
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

// export let Task = sequelize.define('tasks', {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false
//     },
//     text: Sequelize.STRING(100),
//     todoId: Sequelize.INTEGER
// }, {
//     timestamps: false
// });
//
// Todo.hasMany(Task, {as: 'task', foreignKey: 'todoId'});
// Task.belongsTo(Todo, {foreignKey: 'todoId'});
