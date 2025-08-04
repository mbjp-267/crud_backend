import dotenv from 'dotenv';
dotenv.config(); // Biasanya di index.js

import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import User from "./models/UserModel.js";

const app = express();

const startServer = async () => {
try {
    await db.authenticate();
    await db.sync();
    console.log("Database connected...");
} catch (error) {
    console.error("Database connection error:", error);
}

const allowedOrigins = [
  "https://crud-frontend-beige.vercel.app",
  "https://crud-frontend-l5rk5kkvp-m-bambang-j-ps-projects.vercel.app"
];

app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());
app.use("/users", UserRoute);

// Gunakan PORT dari Railway
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
};

startServer();
