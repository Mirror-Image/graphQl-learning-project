import {useLazyQuery} from "@apollo/react-hooks";
import {loader} from "graphql.macro";

const queryProfile = loader('./gql/queryPetById.graphql');

export const useQueryPetById = () => {
  const [getPetById, { loading, data, error }] = useLazyQuery(queryProfile);

  return {
    getPetById,
    data: data && data.petById,
    loading,
    error
  }
}
