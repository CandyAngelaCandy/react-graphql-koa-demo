"use strict";

const Koa = require('koa');

const mount = require('koa-mount');

const graphqlHTTP = require('koa-graphql');

const cors = require('koa2-cors');

const graphql = require('graphql');

const schema = require('schema');

const app = new Koa();
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');