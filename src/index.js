import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
  path: "/.env",
});

const app = express();
const port = process.env.PORT || 8000;

connectDB();

app.get("/", (req, res) => {
  res.send("⚙️ BatBall app server running ✌️");
});

app.listen(port, () => {
  console.log(`⚙️ BatBall app running on port ${port}`);
});
