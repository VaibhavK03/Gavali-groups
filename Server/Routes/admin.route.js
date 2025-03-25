import express from "express";
import { adminLogin } from "../Controller/adminLogin.controller.js";
import { changeAdminPass } from "../Controller/changeAdminPass.controller.js";
import { adminRegister } from "../Controller/adminRegister.controller.js";
import { adminLogout } from "../Controller/adminLogout.controller.js";
import verifyToken from "../Middleware/verifyToken.js";

const router = express.Router();

router.post("/register", adminRegister);
router.post("/login", adminLogin);
router.post("/logout", adminLogout);
router.put("/change-password", changeAdminPass);

export default router;