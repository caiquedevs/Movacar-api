import { Router } from "express";

import UserController from "../controllers/UserController";
const router = Router();

// Login
router.get("/users", UserController.index);
router.post("/user", UserController.create);
router.put("/user/:userId", UserController.update);
router.delete("/user/:userId", UserController.delete);

export default router;
