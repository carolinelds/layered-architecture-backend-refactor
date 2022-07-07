import { Router } from "express";
import { addEvent, getEvents } from "./../controllers/financialEventsController.js";
import { checkAuthMiddleware } from "./../middlewares/checkAuthMiddleware.js";

const financialEventsRouter = Router();

financialEventsRouter.post("/financial-events", checkAuthMiddleware, addEvent);
financialEventsRouter.get("/financial-events", checkAuthMiddleware, getEvents)

export default financialEventsRouter;