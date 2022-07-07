import cors from "cors";
import express from "express";
import "express-async-errors";
import router from "./routes/index.js";
import { errorHandlingMiddleware } from "./middlewares/errorHandlingMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandlingMiddleware);

export default app;
