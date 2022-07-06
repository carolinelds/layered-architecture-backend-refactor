import connectDB from "./../database.js";

async function selectUserByEmail(email){
    const connection = await connectDB();

    return await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
        );
}

async function insertNewUser(name, email, hashedPassword){
    const connection = await connectDB();

    await connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
    );
}

const authRepository = {
    selectUserByEmail,
    insertNewUser
}

export default authRepository;