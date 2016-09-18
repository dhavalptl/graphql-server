import express from 'express';
import bodyParser from 'body-parser';
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import schema from './data/schema';
import Loaders from './data/connectors';
import resolvers from './data/resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const app = express();

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolvers
});

app.use('/graphql', bodyParser.json(), apolloExpress({
  schema: executableSchema,
  context: Loaders
}));

app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(4000, () => console.log('Graphql server is running on localhost:4000/graphql'));