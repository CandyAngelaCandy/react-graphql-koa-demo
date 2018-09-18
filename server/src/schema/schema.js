import queryType from './query';
import mutationType from './mutation';
import {GraphQLSchema} from 'graphql';

const schema = new GraphQLSchema({query: queryType, mutation: mutationType});

export default schema;