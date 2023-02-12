import {loader} from "graphql.macro";
import {useMutation} from "@apollo/react-hooks";

const mutationCheckIn = loader('./gql/mutationCheckIn.graphql');

export const useCheckIn = () => {
  const [checkIn, { loading, data, error }] = useMutation(mutationCheckIn);

  const onSubmit = (id) => {
    checkIn({ variables: { id } })
  }

  return {
    onSubmit,
    data: data && data.checkIn.pet,
    loading,
    error,
  }
};
