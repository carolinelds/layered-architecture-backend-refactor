import connectDB from "./../database.js";

async function insertFinancialEvent(userId, value, type) {
    const connection = await connectDB();

    await connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [userId, value, type]
    );
}

async function getFinancialEvents(userId) {
    const events = await connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [userId]
    );
}
const financialEventsRepository = {
    insertFinancialEvent,
    getFinancialEvents
}

export default financialEventsRepository;