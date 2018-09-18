export let getTodo = (_, {id}) => {
    console.log("---", "getTodo");
};

export let getTodos = () => {
    console.log("---", "getTodos");
};

export const createTodo = (_, {input}) => {
    console.log("---", "createTodo");
};

export const updateTodo = (_, {id, input}) => {
    console.log("---", "updateTodo");
};

export const deleteTodo = (_, {id}) => {
    console.log("---", "deleteTodo");
};
