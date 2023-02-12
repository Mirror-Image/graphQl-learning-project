import {useForm} from "../useForm";
import {useMutationLogIn} from "../useMutationLogIn";

export const useCustomerLogin = () => {
  const { formData, handleChange } = useForm({ username: '', password: '' })
  const { logIn, data, loading, error } = useMutationLogIn();

  if (data && data.token) {
    localStorage.setItem('token', data.token);
  }

  const onSubmit = () => {
    logIn({ variables: { ...formData } });
  }

  return {
    handleChange,
    onSubmit,
    formData,
    loading,
    error,
    data,
  }
}
