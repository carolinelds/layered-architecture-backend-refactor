import jwt from "jsonwebtoken";
import { financialEventsService } from "./../services/financialEventsService.js";
import "./../setup.js";

export async function addEvent(req, res){

    const { value, type } = req.body;

    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    const user = jwt.verify(token, process.env.JWT_SECRET);
    
    await financialEventsService(user.id, value, type);

    res.sendStatus(201);
}