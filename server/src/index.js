import Koa from 'koa';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import cors from 'koa2-cors';
import schema from './schema/schema';

const app = new Koa();

app.use(
    cors({
        origin: 'http://localhost:3000'
    })
);

app.use(
    mount(
        '/graphql',
        graphqlHTTP({
            schema: schema,
            graphiql: true
        })
    )
);

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
