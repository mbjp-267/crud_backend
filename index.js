import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import User from "./models/UserModel.js";
import dotenv from 'dotenv';
dotenv.config(); // Biasanya di index.js

const app = express();

const allowedOrigins = [
  "https://crud-frontend-beige.vercel.app",
  "https://crud-frontend-pojbdtbvf-m-bambang-j-ps-projects.vercel.app"
];

app.use(cors({
    origin: function(origin, callback) {
      console.log("CORS request from:", origin);
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true
}));

app.options("*", cors()); 
app.use(express.json());
app.use("/users", UserRoute);

const startServer = async () => {
try {
    await db.authenticate();
    await db.sync();
    console.log("Database connected...");
} catch (error) {
    console.error("Database connection error:", error);
}
// Gunakan PORT dari Railway
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
};

startServer();
