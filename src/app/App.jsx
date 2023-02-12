import {client} from "./init/client";
import {ApolloProvider} from "@apollo/react-hooks";
import {Pet} from "./bus/pet";
import {Customer} from "./bus/customer";

export const App = () => {

  return (
    <ApolloProvider client={client}>
      <Customer />
      <Pet />
    </ApolloProvider>
  );
}
