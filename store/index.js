import express from "express";
import "dotenv/config";
import router from "./routers/index.js";
import errorHandler from "./middleware/errorMiddleware.js";

const PORT = process.env.PORT || 3015;

const app = express();

app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
