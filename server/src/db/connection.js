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

export default sequelize;


