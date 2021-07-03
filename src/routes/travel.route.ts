import { Router } from "express";

import TravelController from "../controllers/TravelController";
const router = Router();

// Travels
router.get("/travels", TravelController.index);
router.post("/travel", TravelController.create);
router.put("/travel/:user_id", TravelController.update);
router.delete("/travel/:user_id", TravelController.delete);

export default router;
