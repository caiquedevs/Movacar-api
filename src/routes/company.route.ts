import { Router } from "express";

import CompanyController from "../controllers/CompanyController";
const router = Router();

// Drivers
router.get("/companies", CompanyController.index);
router.post("/company", CompanyController.create);
router.put("/company/:companyId", CompanyController.update);
router.delete("/company/:companyId", CompanyController.delete);

export default router;
