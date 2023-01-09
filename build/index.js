"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var router_1 = __importDefault(require("./router"));
var port = process.env.PORT || 4000;
var app = (0, express_1.default)();
/* app.use(createProxyMiddleware('/login',
{
  target:"https://empman-uladziby.herokuapp.com",
  changeOrigin:true,
})) */
app.use((0, cors_1.default)( /* {
  origin: 'https://empman-uladziby.herokuapp.com',
  credentials: true,
} */));
app.use(express_1.default.json());
app.use("", router_1.default);
app.set('view engine', 'ejs');
function startServer() {
    try {
        app.listen(port, function () {
            console.log("server has been start on port ".concat(port));
        });
    }
    catch (e) {
        console.log(e);
    }
}
startServer();
