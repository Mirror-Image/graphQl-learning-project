import {useQueryUsers} from "./hooks/useQueryUsers";

export const Users = () => {
  const { data, loading, error } = useQueryUsers();

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {error && (
        <div>Something went wrong: {error.message}</div>
      )}
      {data && Boolean(data.length) && data.map(user => (
        <div key={user.email}>
          <div>User name: {user.name}</div>
          <div>User email: {user.email}</div>
        </div>
      ))}
    </div>
  );
}
