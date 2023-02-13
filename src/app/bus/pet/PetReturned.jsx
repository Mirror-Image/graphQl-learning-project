import {useSubscriptionPetReturned} from "./hooks/useSubscriptionPetReturned";

export const PetReturned = () => {
  const { data, error} = useSubscriptionPetReturned();
  return (
    <div>
      <h3>Pet Returned</h3>
      {error && (
        <div>Something went wrong: <strong>{error.message}</strong></div>
      )}
      {data && (
        <>
          <div>Id: {data.id}</div>
          <div>Name: {data.name}</div>
        </>
      )}
    </div>
  )
}
