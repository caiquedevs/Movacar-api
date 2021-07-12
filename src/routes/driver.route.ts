import { Router } from "express";

import DriverController from "../controllers/DriverController";
const router = Router();

// Drivers
router.get("/drivers", DriverController.index);
router.post("/driver", DriverController.create);
router.put("/driver/:driverId", DriverController.update);
router.delete("/driver/:driverId", DriverController.delete);

// Filter
router.get("/driverByFilter", DriverController.filter);

export default router;
