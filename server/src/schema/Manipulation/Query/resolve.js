import {Todo} from "../../../db/models/Todo";

export const getTodo = (_, {id}) => {
    return Todo.findAll({
        where: {
            id: id
        }
    });
};


export const getTodos = () => {
    return Todo.findAll();
};