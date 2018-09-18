import {Sequelize} from 'sequelize';
import mysqlConfig from './configs/mysql-config';

// Create new database connection
const sequelize = new Sequelize(mysqlConfig.database, mysqlConfig.username, mysqlConfig.password, {
    host: mysqlConfig.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

// Test connection
console.info('SETUP - Connecting database...')

sequelize
    .authenticate()
    .then(() => {
        console.info('INFO - Database connected.')
    })
    .catch(err => {
        console.error('ERROR - Unable to connect to the database:', err)
    });

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

(async () => {
    let myTodo = await Todo.create({
        text:'eat',
        completed:false,
        editable:false,
        visible:false,
        deleted:false,
        time:Date.now(),
        userid:0
    });
    console.log('created: ' + JSON.stringify(myTodo));
    let todos = await Todo.findAll({
        where: {
            id: 1
        }
    });
    console.log(`find ${todos.length} todo:`);
    for (let td of todos) {
        console.log(JSON.stringify(td));
    }
})();


