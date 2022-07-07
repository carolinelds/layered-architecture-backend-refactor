import { Router } from "express";
import { addEvent } from "./../controllers/financialEventsController.js";
import { checkAuthMiddleware } from "./../middlewares/checkAuthMiddleware.js";

const financialEventsRouter = Router();

financialEventsRouter.post("/financial-events", checkAuthMiddleware, addEvent);


export default financialEventsRouter;