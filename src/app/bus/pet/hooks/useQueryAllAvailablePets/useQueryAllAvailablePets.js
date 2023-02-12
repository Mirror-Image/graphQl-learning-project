import {loader} from "graphql.macro";
import {useLazyQuery} from "@apollo/react-hooks";

const queryAllAvailablePets = loader('./gql/queryAllAvailablePets.graphql');

export const useQueryAllAvailablePets = () => {
  const [getAllAvailablePets, { loading, data, error }] = useLazyQuery(queryAllAvailablePets);
  return {
    getAllAvailablePets,
    data: data && data.allAvailablePets,
    loading,
    error
  }
}
