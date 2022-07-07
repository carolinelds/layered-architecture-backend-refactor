import jwt from "jsonwebtoken";
import { addEventService } from "./../services/financialEventsService.js";
import financialEventsRepository from "../repositories/financialEventsRepository.js";
import "./../setup.js";

export async function addEvent(req, res) {

    const { value, type } = req.body;

    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    const user = jwt.verify(token, process.env.JWT_SECRET);

    await addEventService(user.id, value, type);

    res.sendStatus(201);
}

export async function getEvents(req, res) {
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    const user = jwt.verify(token, process.env.JWT_SECRET);

    const events = await financialEventsRepository.getFinancialEvents(user.id);

    res.send(events.rows);
}

export async function getSum(req, res) {
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    const user = jwt.verify(token, process.env.JWT_SECRET);

    const events = await financialEventsRepository.getFinancialEvents(user.id);

    const sum = events.rows.reduce(
        (total, event) =>
            event.type === "INCOME" ? total + event.value : total - event.value, 0
    );

    res.send({ sum });
}