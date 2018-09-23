import {Todo} from "../../../db/models/Todo";

const handleErrors = (error) => {
    switch (error.reason) {
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

export const createTodo = (_, {input}) => {
    return Todo.create({
        text: input.text,
        completed: false,
        editable: false,
        visible: false,
        deleted: false,
        time: Date.now(),
    }).catch((err) => {
        handleErrors(err);
    });
};

export const updateTodo = (_, {id, input}) => {
    return Todo.update({
        text: input.text,
        completed: input.completed,
        editable: input.editable,
        visible: input.visible,
        deleted: input.deleted,
        time: input.time,
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
    }).catch((err) => {
        handleErrors(err);
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
    }).catch((err) => {
        handleErrors(err);
    });
};
