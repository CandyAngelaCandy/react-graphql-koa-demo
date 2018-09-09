const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const { buildSchema } = require('graphql');
var cors = require('koa2-cors');

// 使用 GraphQL schema language 构建一个 schema
const schema = buildSchema(`
  
  input MessageInput {
    content: String
    author: String
  }

  type Message {
    id: ID!
    content: String
    author: String
  }
 
  type Query {
    getMessage(id: ID!): Message
    hello: String
  }
  
  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
  
`);

class Message {
    constructor(id, {content, author}) {
        this.id = id;
        this.content = content;
        this.author = author;
    }
}
// root 将会提供每个 API 入口端点的解析函数
let fakeDatabase = {};

let root = {
    hello: () => 'Hello world!',
    getMessage: function ({id}) {
        if (!fakeDatabase[id]) {
            throw new Error('no message exists with id ' + id);
        }
        return new Message(id, fakeDatabase[id]);
    },
    createMessage: function ({input}) {
        // Create a random id for our "database".
        var id = require('crypto').randomBytes(10).toString('hex');

        fakeDatabase[id] = input;
        return new Message(id, input);
    },
    updateMessage: function ({id, input}) {
        if (!fakeDatabase[id]) {
            throw new Error('no message exists with id ' + id);
        }
        // This replaces all old data, but some apps might want partial update.
        fakeDatabase[id] = input;
        return new Message(id, input);
    }
};

const app = new Koa();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
})));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');