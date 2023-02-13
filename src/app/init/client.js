import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split
} from "@apollo/client";
// import {GraphQLWsLink} from "@apollo/client/link/subscriptions";
import {setContext} from "@apollo/client/link/context";
// import {createClient} from "graphql-ws";
import {getMainDefinition} from "@apollo/client/utilities";
import {WebSocketLink} from "@apollo/client/link/ws";

// GraphQL Server
const root = 'funded-pet-library.moonhighway.com/';
const uri = `https://${root}`;
const httpLink = createHttpLink({ uri })

// WS
// new ws engine
// const wsLink = new GraphQLWsLink(
//   createClient({
//     url: `wss://${root}graphql`,
//     disablePong: false
//   }),
// );

// old ws engine
const wsLink = new WebSocketLink({
  uri: `wss://${root}graphql`,
  options: {
    reconnect: true
  }
});

// Auth
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const wrappedHttpLink = authLink.concat(httpLink);

const link = split(({ query }) => {
  const definition = getMainDefinition(query);

  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  );
}, wsLink, wrappedHttpLink);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})
