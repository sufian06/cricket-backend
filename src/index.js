import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "/.env",
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚙️ BatBall app running on port ${port}`);
    });

    app.on("errror", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.get("/", (req, res) => {
      res.send("🏏 BatBall app server running ✌️");
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !! ", err);
  });
