import * as express from "express";
import Controller from "./controller";

const router = express.Router();

router.post("/login", Controller.checkLogIn);
router.post("/login", Controller.checkLogIn);
router.post("/logout", Controller.logout);
router.post("/main", Controller.create);
router.get("/main", Controller.getAll);
router.get("/main/emp", Controller.getALlEmployees);
router.delete("/main/emp/:id", Controller.deleteEmp);
router.post("/main/emp/", Controller.createEmp);
router.get("/detail/:id", Controller.getDetailEmp);
router.put("/detail/:id", Controller.updateDetailEmp);
router.post("/register", Controller.createNewUser);

router.get("/login", function (req, res, next) {
  res.render("index", { title: "Logining" });
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Empman-server" });
});
export default router;
