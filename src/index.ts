import express from "express";
import cors from "cors";
import router from "./router";
import axios, { AxiosResponse } from "axios";

const min = 60000;
const whitelist = ["https://empman-uladziby.herokuapp.com"];
const port = process.env.PORT || 4000;
var options = {
  oorigin: "*",
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
};
const app = express();
app.use(cors(options));
app.use(express.json());
app.use("", router);
app.set("view engine", "ejs");

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

setInterval(() => {
  ping().then((res) => {
    console.log(`${res.status}-${res.data}`);
  });
}, 5 * min);

export async function ping(): Promise<AxiosResponse<string>> {
  return await axios.get("https://empman-uladziby.herokuapp.com/login/ping");
}

/* app.use(createProxyMiddleware('/login',
{
  target:"https://empman-uladziby.herokuapp.com",
  changeOrigin:true,
})) */
/* app.use(cors({
  origin: 'https://empman-uladziby.herokuapp.com',
  credentials: true,
})) */
