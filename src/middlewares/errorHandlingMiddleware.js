export function errorHandlingMiddleware(error, req, res, next){
    if (error.type === "error_not_found") return res.sendStatus(404);
    if (error.type === "error_data_empty") return res.sendStatus(422);
    if (error.type === "error_database_conflict") return res.sendStatus(409);

    return res.sendStatus(500);
}