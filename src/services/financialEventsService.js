import errorResponse from "./../responses/errorResponses.js";
import financialEventsRepository from "./../repositories/financialEventsRepository.js";

export async function financialEventsService(userId, value, type) {
    
    if (!value || !type) {
        return errorResponse.emptyInput("Event data fields");
    }

    const financialTypes = ["INCOME", "OUTCOME"];
    if (!financialTypes.includes(type)) {
        return errorResponse.unprocessableEntity("type");
    }

    if (value < 0) {
        return errorResponse.unprocessableEntity("value");
    }

    await financialEventsRepository.insertFinancialEvent(userId, value, type);

    console.log("chegou aqui");
}
