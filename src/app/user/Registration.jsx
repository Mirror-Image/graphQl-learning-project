import {useUserCreator} from "./hooks/useUserCreator";

export const Registration = () => {
  const { formData, handleChange, onSubmit, data } = useUserCreator();

  return (
    <>
      <div>User</div>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
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
    </>
  );
}
