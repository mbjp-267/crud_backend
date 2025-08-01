import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
  protocol: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

export default db;
