export const handleErrors = (error) => {
    switch (error.reason) {
        case "ERRORS.TODO_NOT_FOUND":
            console.error("todo not found");
            break;
        case "ERRORS.TODO_UPDATE_FAILURE":
            console.error("todo update failure");
            break;
        case "ERRORS.TODO_CREATE_FAILURE":
            console.error("todo create failure");
            break;
        case "ERRORS.TODO_DELETE_FOUND":
            console.error("todo delete failure");
            break;
        default:
            console.error(error);
    }
};