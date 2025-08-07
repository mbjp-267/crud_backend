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

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
};

startServer();
