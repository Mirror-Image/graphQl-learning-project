import {useCustomerCreate} from "./hooks/useCustomerCreate";

export const Customer = () => {
  const { formData, handleChange, onSubmit, data } = useCustomerCreate();

  return (
    <div>
      <h2>Customer</h2>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button onClick={onSubmit}>Save</button>
      {data && (
        <p>We created a new customer with username {data.username}</p>
      )}
    </div>
  )
}
