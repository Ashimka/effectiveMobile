import { Router } from "express";
import ShopController from "../controllers/ShopController.js";

const router = new Router();

router.post("/", ShopController.create);

export default router;
