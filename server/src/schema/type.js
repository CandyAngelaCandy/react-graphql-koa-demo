// 定义类型
import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

export const todoType = new GraphQLObjectType({
    name: 'Todo',
    fields: {
        id: {type: GraphQLNonNull(GraphQLID)},
        text: {type: GraphQLString},
        completed: {type: GraphQLBoolean},
        editable: {type: GraphQLBoolean},
        visible: {type: GraphQLBoolean},
        time: {type: GraphQLString},
        taskItems: {type: new GraphQLList(GraphQLString)}
    }
});

export const TodoInput = new GraphQLInputObjectType({
    name: 'TodoInput',
    fields: {
        text: {type: GraphQLString},
        taskItems: {type: new GraphQLList(GraphQLString)}
    }
});