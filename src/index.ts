import express from "express";
import cors from "cors";
import router from "./router";
import { DotenvConfigOptions } from "dotenv";

const port = process.env.PORT || 4040;

const app = express();
app.use(cors({
  origin: 'https://empman-uladziby.herokuapp.com'
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
