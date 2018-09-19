import {Todo} from "../db/models/Todo";

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

export const createTodo = (_, {input}) => {
    return Todo.create({
        text: input.text,
        completed: false,
        editable: false,
        visible: false,
        deleted: false,
        time: Date.now(),
    });
};

export const updateTodo = (_, {id, input}) => {

    return Todo.update({
        text: input.text
    }, {
        where: {
            id: id
        }
    }).then(() => {
         return Todo.findAll({
            where: {
                id: id
            }
        });
    });
};

export const deleteTodo = (_, {id}) => {

    return Todo.destroy({
        where: {
            id: id
        }
    }).then(() => {
        return Todo.findAll({
            where: {
                id: id
            }
        });
    });
};
