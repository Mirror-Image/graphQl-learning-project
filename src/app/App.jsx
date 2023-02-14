import {client} from "./init/client";
import {ApolloProvider} from "@apollo/react-hooks";
import {Pet} from "./bus/pet";
import {Customer} from "./bus/customer";
import {Login} from "./bus/customer/Login";
// import {User} from "./user";

export const App = () => {

  return (
    <ApolloProvider client={client}>
      <Login />
      <Customer />
      <Pet />
      {/*<User />*/}
    </ApolloProvider>
  );
}
