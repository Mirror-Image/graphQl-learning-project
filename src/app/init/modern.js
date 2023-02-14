import {ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";

// GraphQL Server
const uri = 'http://localhost:4000/';
const link = createHttpLink({ uri, credentials: 'include' })

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})
