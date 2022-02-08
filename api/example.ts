import { ApolloServer } from "../src";
import {HelloDirective} from './HelloDirective'


const typeDefs = `
  directive @helloDir on QUERY | FIELD_DEFINITION

  type Query {
    hello: String @helloDir
  }
`;

export const schemaDirectives = {
  helloDir: HelloDirective,
};

const resolvers = {
  Query: {
    hello: (_,__, ___, info) => {
      return "Hello world!" 
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // By default, the GraphQL Playground interface and GraphQL introspection
  // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
  //
  // If you'd like to have GraphQL Playground and introspection enabled in production,
  // the `playground` and `introspection` options must be set explicitly to `true`.
  playground: true,
  introspection: true
});

export default server.createHandler();
