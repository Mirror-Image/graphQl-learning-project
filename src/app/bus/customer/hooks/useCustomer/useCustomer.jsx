import {useState} from "react";
import {useMutationCreateAccount} from "../useMutationCreateAccount";

export const useCustomer = () => {
  const [values, setValues] = useState({ name: '', username: '', password: '' });

  const { createUser, data, loading, error } = useMutationCreateAccount();

  const handleChange = (event) => {
    event.persist();

    const value = event.target.value;
    const name = event.target.name;

    setValues(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onSubmit = () => {
    createUser({ variables: { account: {...values} }})
  }

  return { handleChange, values, onSubmit, loading, error, data };
}
