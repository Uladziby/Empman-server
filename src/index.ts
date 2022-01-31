import express from "express";
import cors from "cors";
import router from "./router";
import proxy from "http-proxy-middleware"
import { DotenvConfigOptions } from "dotenv";

const port = process.env.PORT || 8080;

const app = express();

app.use(cors({
  origin: 'https://empman-uladziby.herokuapp.com',
  credentials: true,
}))
app.use(express.json());
app.use("", router);

function startServer() {
  try {
    app.listen(port, () => {
      console.log(`server has been start on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

startServer();
