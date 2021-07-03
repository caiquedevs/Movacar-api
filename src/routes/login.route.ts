import { Router } from "express";

import LoginController from "../controllers/LoginController";
const router = Router();

// Login
router.get("/login", LoginController.index);
router.post("/login", LoginController.create);
router.put("/login/:user_id", LoginController.update);
router.delete("/login/:user_id", LoginController.delete);

export default router;
