import express from "express";
import historyRoute from "./historyRoute";

const router = express.Router();

router.use("/history", historyRoute);

export default router;
