import { Router } from "express";
import StockController from "../controllers/StockController.js";

const router = new Router();

router.post("/", StockController.create);
router.patch("/increase", StockController.increment);
router.patch("/decrease", StockController.decrement);
router.get("/", StockController.filter);

export default router;
