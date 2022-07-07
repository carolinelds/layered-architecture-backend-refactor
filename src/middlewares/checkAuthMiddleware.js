import jwt from "jsonwebtoken";
import errorResponse from "../responses/errorResponses.js";

export async function checkAuthMiddleware(req, res, next) {

    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");

    if (!token) {
        return errorResponse.unauthorizedUser("User token");
    }

    let user;

    try {
        user = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
        return errorResponse.unauthorizedUser("User token");
    }

    next();
}