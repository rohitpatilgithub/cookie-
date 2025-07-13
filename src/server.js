import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import cors from 'cors';
import router from "./routes/login.router.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.static("public"));
app.use(cors({
    origin : "http://127.0.0.1:5500",
    credentials : true
}))

app.use('/',router)

connectDB();
app.listen(port , () => {
    console.log(`Running on port ${port}`);
})