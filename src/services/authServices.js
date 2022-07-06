import errorResponse from "./../responses/errorResponses.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authRepository from "../repositories/authRepository.js";

export async function signUpService(name, email, password) {

    if (!name || !email || !password) {
        return errorResponse.emptyInput("User data fields");
    }

    const existingUsers = await authRepository.selectUserByEmail(email);

    if (existingUsers.rowCount > 0) {
        return errorResponse.databaseConflict("Email");
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    await authRepository.insertNewUser(name, email, hashedPassword);
}

export async function signInService(email, password) {

    if (!email || !password) {
        return errorResponse.emptyInput("Login data fields");
    }

    const { rows } = await authRepository.selectUserByEmail(email);
    const [user] = rows;

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return errorResponse.unauthorizedUser("Username or password");
    }

    const token = jwt.sign(
        {
            id: user.id,
        },
        process.env.JWT_SECRET
    );

    return token;
}