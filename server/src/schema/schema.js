import queryType from './Manipulation/Query/type';
import mutationType from './Manipulation/Mutation/type';
import {GraphQLSchema} from 'graphql';

const schema = new GraphQLSchema({query: queryType, mutation: mutationType});

export default schema;