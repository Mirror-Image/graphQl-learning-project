import {client} from "./init/client";
import {ApolloProvider} from "@apollo/react-hooks";
import {Pet} from "./bus/pet";

export const App = () => {

  return (
    <ApolloProvider client={client}>
      <Pet />
    </ApolloProvider>
  );
}
