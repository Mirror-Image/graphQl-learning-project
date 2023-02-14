import {useMutationCreateAccount} from "../useMutationCreateAccount";
import {useForm} from "../../../../hooks/useForm";

export const useCustomerCreate = () => {
  const { createUser, data, loading, error } = useMutationCreateAccount();
  const { handleChange, formData } = useForm({
    name: '',
    username: '',
    password: ''
  });

  const onSubmit = () => {
    createUser({ variables: { account: {...formData} }})
  }

  return { handleChange, formData, onSubmit, loading, error, data };
}
