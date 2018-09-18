import {Todo} from "../db/models/Todo";

export let getTodo = (_, {id}) => {
    (async () => {
        let todos = await Todo.findAll({
            where: {
                id: id
            }
        });
        console.log(`find ${todos.length} todo:`);
        for (let td of todos) {
            console.log(JSON.stringify(td));
        }
    })();
    console.log("---", "getTodo");
};

export let getTodos = () => {
    (async () => {
        let todos = await Todo.findAll({ include : ['task'] });
        console.log(`find ${todos.length} todo:`);
        for (let todo of todos) {
            console.log(JSON.stringify(todo));
        }
    })();
    console.log("---", "getTodos");
};

export const createTodo = (_, {input}) => {
    console.log("---", "createTodo");
    (async () => {
        let myTodo = await Todo.create({
            text: input.text,
            completed: false,
            editable: false,
            visible: false,
            deleted: false,
            time: Date.now(),
            userid: 0
        });
        console.log('created Todo: ' + JSON.stringify(myTodo));
        //return myTodo;
    })();
};

export const updateTodo = (_, {id, input}) => {
    (async () => {
        let updateTodo = await Todo.update({
            text: input.text
        }, {
            where: {
                id: id
            }
        });
        console.log('update Todo: ' + JSON.stringify(updateTodo));
    })();
};

export const deleteTodo = (_, {id}) => {
    (async () => {
        let deleteTodo = await Todo.destroy({
            where: {
                id: id
            }
        });
        console.log('delete Todo: ' + JSON.stringify(deleteTodo));
        //return myTodo;
    })();
};
