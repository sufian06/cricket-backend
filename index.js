import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`⚙️ BatBall app running on port ${port}`);
});
