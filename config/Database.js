import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config(); // <- wajib untuk baca .env

const db = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    logging: false,
    dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // penting untuk koneksi Railway
    },
  },
});

export default db;
