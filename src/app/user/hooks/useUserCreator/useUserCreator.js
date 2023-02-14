import {useForm} from "../../../hooks/useForm";
import {useMutation} from "@apollo/react-hooks";
import {loader} from "graphql.macro";

const mutationCreateAccount = loader('./gql/mutationUserCreator.graphql');

export const useUserCreator = () => {
  const { createUser, data, loading, error } = useMutation(mutationCreateAccount);
  const { handleChange, formData } = useForm({
    name: '',
    email: '',
    password: ''
  });

  const onSubmit = () => {
    createUser({ variables: {...formData}})
  }

  return { handleChange, formData, onSubmit, loading, error, data: data && data.signUp };
}
