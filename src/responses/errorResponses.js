export function emptyInput(entity){
    throw {
        type: "error_data_empty",
        message: `${entity} cannot be empty`
    }
}

export function notFound(entity){
    throw {
        type: "error_not_found",
        message: `Could not find specified "${entity}"!`
    }
}

export function databaseConflict(entity){
    throw {
        type: "error_database_conflict",
        message: `${entity} already in use`
    }
}

export function unauthorizedUser(entity){
    throw {
        type: "error_unauthorized_user",
        message: `${entity} is incorrect or not found`
    }
}

export function unprocessableEntity(entity){
    throw {
        type: "error_unprocessable_entity",
        message: `This ${entity} is not a valid one`
    }
}

const errorResponse = {
    emptyInput,
    notFound,
    databaseConflict,
    unauthorizedUser,
    unprocessableEntity
};

export default errorResponse;