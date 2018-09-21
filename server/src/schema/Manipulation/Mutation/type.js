import {TodoInput, todoType} from '../../type';
import {GraphQLID, GraphQLObjectType, GraphQLList} from 'graphql';
import {createTodo, updateTodo, deleteTodo} from './resolve';

const mutationType = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
        createTodo: {
            type: todoType,
            args: {
                input: {type: TodoInput}
            },
            resolve: createTodo
        },
        updateTodo: {
            type: new GraphQLList(todoType),
            args: {
                id: {type: GraphQLID},
                input: {type: TodoInput}
            },
            resolve: updateTodo
        },
        deleteTodo: {
            type: new GraphQLList(todoType),
            args: {
                id: {type: GraphQLID}
            },
            resolve: deleteTodo
        }
    }
});

export default mutationType;