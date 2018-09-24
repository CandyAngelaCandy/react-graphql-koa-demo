import {Todo} from "../../../db/models/Todo";
import {handleErrors} from "../../Exception/handleErrors";

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