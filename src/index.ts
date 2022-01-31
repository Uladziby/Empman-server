import express from "express";
import cors from "cors";
import router from "./router";


const port = process.env.PORT || 4000;

const app = express();
app.use(cors({credentials: true, origin: true}));

/* app.use(createProxyMiddleware('/login',
{
  target:"https://empman-uladziby.herokuapp.com",
  changeOrigin:true,
})) */
/* app.use(cors({
  origin: 'https://empman-uladziby.herokuapp.com',
  credentials: true,
})) */
app.use(express.json());
app.use("", router);
app.set('view engine', 'ejs')


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
