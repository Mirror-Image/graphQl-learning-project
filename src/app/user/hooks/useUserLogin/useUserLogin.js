import {loader} from "graphql.macro";
import {useMutation} from "@apollo/react-hooks";
import {useForm} from "../../../hooks/useForm";

const mutationUserLogin = loader('./gql/mutationUserLogin.graphql');

export const useUserLogin = () => {
  const [login, { data }] = useMutation(mutationUserLogin);
  const { formData, handleChange } = useForm({
    name: '',
    password: '',
  })

  const onSubmit = () => {
    login(formData);
  }

  return {
    formData,
    handleChange,
    onSubmit,
    data: data && data.login,
  }
};
