import {useCustomerLogin} from "./hooks/useCustomerLogin";

export const Login = () => {
  const { formData, handleChange, onSubmit, data } = useCustomerLogin();

  return (
    <div>
      {data ? (
        <>
          <div>Hello, {data.customer.username}</div>
        </>
      ) : (
        <>
          <h3>Login</h3>
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
          <button onClick={onSubmit}>Login</button>
        </>
      )}
    </div>
  )
}
