import * as express from "express";
import Controller from "./controller";

const router = express.Router();

router.post("/login", Controller.checkLogIn);
router.post("/logout", Controller.logout);
router.post("/main", Controller.create);
router.get("/main", Controller.getAll);
router.get("/main/emp", Controller.getALlEmployees);
router.delete("/main/emp/:id", Controller.deleteEmp);
router.post("/main/emp/", Controller.createEmp);
router.get("/detail/:id", Controller.getDetailEmp);
router.patch("/detail/:id", Controller.updateDetailEmp);
router.post("/register", Controller.createNewUser);

export default router;
