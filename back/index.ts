import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { Pool } from "pg";

dotenv.config();

const pool = new Pool({
    database: process.env.DATABASE,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    user: process.env.NAME,
    port: process.env.PORT,
});

pool.connect();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


