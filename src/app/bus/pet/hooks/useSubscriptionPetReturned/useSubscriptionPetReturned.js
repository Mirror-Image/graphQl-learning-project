import {loader} from "graphql.macro";
import {useSubscription} from "@apollo/react-hooks";

const subscriptionPetReturned = loader('./gql/subscriptionPetReturned.graphql');

export const useSubscriptionPetReturned = () => {
  const { data, error } = useSubscription(subscriptionPetReturned);
  console.log(error);
  return { data: data && data.petReturned.pet, error };
}
