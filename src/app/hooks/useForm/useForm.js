import {useState} from "react";

export const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    event.persist();

    const value = event.target.value;
    const name = event.target.name;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return { handleChange, formData };
}
