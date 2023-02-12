import { useQueryPetById } from "./hooks/useQueryPetById";

export const Profile = () => {
  const { getPetById, data, loading, error } = useQueryPetById();

  const loadProfile = () => {
    getPetById({ variables: { id: 'C-1' } })
  }

  if (loading) {
    return <div>Profile is loading...</div>
  }

  if (error) {
    return <div>Something went wrong: {error.message}</div>
  }

  return (
    <div>
      <button onClick={loadProfile}>Get Profile</button>
      {data && <h3>Profile: {data.name}</h3>}
    </div>
  )
}
