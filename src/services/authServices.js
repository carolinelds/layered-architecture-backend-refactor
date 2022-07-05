import errorResponse from "../responses/errorResponses.js";

export async function signUpService(name, email, password) {

    if (!name || !email || !password) {
        return errorResponse.emptyInput("User data fields");
    }

    const existingUsers = await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
    );

    if (existingUsers.rowCount > 0) {
        return errorResponse.databaseConflict("Email");
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    await connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
    );
}