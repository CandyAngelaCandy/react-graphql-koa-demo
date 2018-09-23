import {Todo} from "../../../db/models/Todo";

const handleErrors = (error) => {
    switch (error.reason) {
        case "ERRORS.TODO_NOT_FOUND":
            console.error("todo not found");
            break;
        default:
            console.error(error);
    }
};

export const getTodo = (_, {id}) => {
    return Todo.findOne({
        where: {
            id: id
        }
    }).catch((err) => {
        handleErrors(err);
    });
};

export const getTodos = () => {
    return Todo.findAll().catch((err) => {
        handleErrors(err);
    });
};