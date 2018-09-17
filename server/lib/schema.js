"use strict";

const _require = require('graphql'),
      GraphQLBoolean = _require.GraphQLBoolean,
      GraphQLList = _require.GraphQLList,
      GraphQLID = _require.GraphQLID,
      GraphQLNonNull = _require.GraphQLNonNull,
      GraphQLObjectType = _require.GraphQLObjectType,
      GraphQLInputObjectType = _require.GraphQLInputObjectType,
      GraphQLSchema = _require.GraphQLSchema,
      GraphQLString = _require.GraphQLString;

class Todo {
  constructor(id, {
    text,
    taskItems
  }) {
    this.id = id;
    this.text = text;
    this.completed = false;
    this.editable = false;
    this.visible = true;
    this.time = new Date().toUTCString();
    this.taskItems = taskItems;
  }

}

let fakeDatabase = {};
let todos = [];
let id = 0;

const uuid = () => {
  return id++;
}; // 定义类型


var todoType = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    },
    text: {
      type: GraphQLString
    },
    completed: {
      type: GraphQLBoolean
    },
    editable: {
      type: GraphQLBoolean
    },
    visible: {
      type: GraphQLBoolean
    },
    time: {
      type: GraphQLString
    },
    taskItems: {
      type: new GraphQLList(GraphQLString)
    }
  }
});
var TodoInput = new GraphQLInputObjectType({
  name: 'TodoInput',
  fields: {
    text: {
      type: GraphQLString
    },
    taskItems: {
      type: new GraphQLList(GraphQLString)
    }
  }
}); // 定义 Query 类型

var queryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getTodo: {
      type: todoType,
      // `args` 描述了 `getTodo` 查询接受的参数
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID)
        }
      },
      resolve: function resolve(_, {
        id
      }) {
        return fakeDatabase[id];
      }
    },
    getTodos: {
      type: new GraphQLList(todoType),
      resolve: function resolve() {
        if (todos.length === 0) {
          throw new Error('no todos exists');
        } //console.log("get todos", todos);


        return todos;
      }
    }
  }
}); // 定义 mutation 类型

var mutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createTodo: {
      type: todoType,
      args: {
        input: {
          type: TodoInput
        }
      },
      resolve: function resolve(_, {
        input
      }) {
        let id = uuid();
        input.completed = false;
        input.editable = false;
        input.visible = true;
        input.time = new Date().toUTCString();
        fakeDatabase[id] = input;
        let todo = new Todo(id, input);
        todos.push(todo); //console.log("create todo", todos);

        return todo;
      }
    },
    updateTodo: {
      type: todoType,
      args: {
        id: {
          type: GraphQLID
        },
        input: {
          type: TodoInput
        }
      },
      resolve: function resolve(_, {
        id,
        input
      }) {
        if (!fakeDatabase[id]) {
          throw new Error('no todo exists with id ' + id);
        } // This replaces all old data, but some apps might want partial update.


        fakeDatabase[id] = input;
        todos.filter(todo => todo.id == id).map(todo => {
          todo.text = input.text;
          todo.taskItems = input.taskItems;
        });
        return new Todo(id, input);
      }
    },
    deleteTodo: {
      type: todoType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve: function resolve(_, {
        id
      }) {
        if (!fakeDatabase[id]) {
          throw new Error('no todo exists with id ' + id);
        }

        todos = todos.filter(todo => todo.id != id);
        console.log("behind delete", todos);
        return new Todo(id, fakeDatabase[id]);
      }
    }
  }
});
const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});
module.exports = {
  schema
};