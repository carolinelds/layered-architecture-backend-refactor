export function emptyInput(entity){
    throw {
        type: "error_data_empty",
        message: `${entity} cannot be empty`
    }
}

export function notFound(entity){
    return {
        type: "error_not_found",
        message: `Could not find specified "${entity}"!`
    }
}

export function databaseConflict(entity){
    return {
        type: "error_database_conflict",
        message: `${entity} already in use`
    }
}

const errorResponse = {
    emptyInput,
    notFound,
    databaseConflict
};

export default errorResponse;