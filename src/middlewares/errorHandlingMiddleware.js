export function errorHandlingMiddleware(error, req, res, next){
    if (error.type === "error_not_found") return res.status(404).send(error.message);
    if (error.type === "error_data_empty") return res.status(422).send(error.message);
    if (error.type === "error_database_conflict") return res.status(409).send(error.message);

    return res.sendStatus(500);
}