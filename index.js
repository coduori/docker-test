import express from "express";
import { config } from "dotenv";
import routes from "./routes/routes.js";
// import conn from "./config/db.js";
config();
const app = express();
app.use(express.json());
// conn();
app.use("/test", routes);
app.use((req, res) => {
  res.status(404).send({ message: "resource not found" });
});
app.listen(
  process.env.SERVER_PORT,
  console.log("app has built and is running successfully!")
);
