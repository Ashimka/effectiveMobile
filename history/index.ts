import express from "express";
import router from "./routers/index";

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server started on port: 3030`);
});
