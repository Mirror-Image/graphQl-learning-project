import {loader} from "graphql.macro";
import {useMutation} from "@apollo/react-hooks";

const mutationLogIn = loader('./gql/mutationLogIn.graphql');

export const useMutationLogIn = () => {
  const [logIn, { loading, data, error }] = useMutation(mutationLogIn);

  return {
    logIn,
    data: data && data.logIn,
    loading,
    error,
  }
}
