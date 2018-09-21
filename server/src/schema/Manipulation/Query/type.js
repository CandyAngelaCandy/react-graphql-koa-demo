import {todoType} from '../../type';
import {GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType} from 'graphql';
import {getTodo, getTodos} from './resolve';

const queryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getTodo: {
            type: new GraphQLList(todoType),
            // `args` 描述了 `getTodo` 查询接受的参数
            args: {
                id: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve: getTodo
        },
        getTodos: {
            type: new GraphQLList(todoType),
            resolve: getTodos
        }
    }
});
export default queryType;