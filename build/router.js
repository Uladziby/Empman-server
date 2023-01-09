"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var controller_1 = __importDefault(require("./controller"));
var router = express.Router();
router.post("/login", controller_1.default.checkLogIn);
router.post("/login", controller_1.default.checkLogIn);
router.post("/logout", controller_1.default.logout);
router.post("/main", controller_1.default.create);
router.get("/main", controller_1.default.getAll);
router.get("/main/emp", controller_1.default.getALlEmployees);
router.delete("/main/emp/:id", controller_1.default.deleteEmp);
router.post("/main/emp/", controller_1.default.createEmp);
router.get("/detail/:id", controller_1.default.getDetailEmp);
router.patch("/detail/:id", controller_1.default.updateDetailEmp);
router.post("/register", controller_1.default.createNewUser);
router.get("/login", function (req, res, next) {
    res.render("index", { title: "Logining" });
});
router.get("/", function (req, res, next) {
    res.render("index", { title: "Empman-server" });
});
exports.default = router;
