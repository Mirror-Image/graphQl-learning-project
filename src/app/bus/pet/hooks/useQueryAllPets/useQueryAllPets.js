import {loader} from "graphql.macro";
import {useQuery} from "@apollo/react-hooks";

const queryAllPets = loader('./gql/queryAllPets.graphql');

export const useQueryAllPets = () => {
  const { data, loading, error } = useQuery(queryAllPets);
  return { loading, data: data && data.allPets, error };
}
