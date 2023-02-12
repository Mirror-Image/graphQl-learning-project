import {useCustomer} from "./hooks/useCustomer";

export const Customer = () => {
  const { values, handleChange, onSubmit, data } = useCustomer();

  return (
    <div>
      <h2>Customer</h2>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={values.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="username"
        value={values.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
      <button onClick={onSubmit}>Save</button>
      {data && (
        <p>We created a new customer with username {data.username}</p>
      )}
    </div>
  )
}
