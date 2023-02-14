import {useUserLogin} from "./hooks/useUserLogin";

export const Login = () => {
  const { formData, handleChange, onSubmit, data } = useUserLogin();

  return (
    <div>
      {data ? (
        <>
          <div>Hello, {data.name}</div>
        </>
      ) : (
        <>
          <h3>Login</h3>
          <input
            type="text"
            name="name"
            placeholder="name"
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
  );
}
