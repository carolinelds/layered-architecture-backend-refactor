//import connection from "./../database.js";
import errorResponse from "./../responses/errorResponses.js";
import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";

export async function signUpService(name, email, password) {

    if (!name || !email || !password) {
        return errorResponse.emptyInput("User data fields");
    }

    const existingUsers = await authRepository.checkUserExists(email);

    if (existingUsers.rowCount > 0) {
        return errorResponse.databaseConflict("Email");
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    await authRepository.insertNewUser(name, email, hashedPassword);
}