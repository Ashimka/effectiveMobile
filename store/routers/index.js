import { Router } from "express";
import productRoute from "./productRoute.js";
import shopRoute from "./shopRoute.js";
import stockRoute from "./stockRoute.js";

const router = new Router();

router.use("/products", productRoute);
router.use("/shops", shopRoute);
router.use("/stock", stockRoute);

export default router;
