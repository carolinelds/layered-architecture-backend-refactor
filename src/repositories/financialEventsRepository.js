import connectDB from "./../database.js";

async function insertFinancialEvent(userId, value, type){
    const connection = await connectDB();

    await connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [userId, value, type]
    );
}

const financialEventsRepository = {
    insertFinancialEvent
}

export default financialEventsRepository;