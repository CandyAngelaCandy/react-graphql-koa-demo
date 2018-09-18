import Todo from "./models/Todo";
(async () => {
    let myTodo = await Todo.create({
        text:'eat',
        completed:false,
        editable:false,
        visible:false,
        deleted:false,
        time:Date.now(),
        userid:0
    });
    console.log('created: ' + JSON.stringify(myTodo));
    let todos = await Todo.findAll({
        where: {
            id: 1
        }
    });
    console.log(`find ${todos.length} todo:`);
    for (let td of todos) {
        console.log(JSON.stringify(td));
    }
})();