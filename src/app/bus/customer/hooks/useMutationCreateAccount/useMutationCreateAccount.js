import {useMutation} from "@apollo/react-hooks";
import {loader} from "graphql.macro";

const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useMutationCreateAccount = () => {
  const [createUser, { loading, data, error }] = useMutation(mutationCreateAccount);

  return {
    createUser,
    data: data && data.createAccount,
    loading,
    error,
  }
}
