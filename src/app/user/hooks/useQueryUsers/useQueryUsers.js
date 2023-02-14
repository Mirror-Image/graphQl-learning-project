import {useQuery} from "@apollo/react-hooks";
import {loader} from "graphql.macro";

const queryUsers = loader('./gql/queryUsers.graphql');

export const useQueryUsers = () => {
  const {loading, data, error} = useQuery(queryUsers);

  return { loading, data: data && data.users, error }
}
