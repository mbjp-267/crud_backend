import { Sequelize } from "sequelize";

const db = new Sequelize('crud_db', 'postgres', 'admin123',{
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: false
});

export default db;