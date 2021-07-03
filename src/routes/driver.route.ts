import { Router } from "express";

import DriverController from "../controllers/DriverController";
const router = Router();

// Drivers
router.get("/drivers", DriverController.index);
router.post("/driver", DriverController.create);
router.put("/driver/:user_id", DriverController.update);
router.delete("/driver/:user_id", DriverController.delete);

export default router;
