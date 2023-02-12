import {useCheckIn} from "./hooks/useCheckIn";

export const CheckInPet = () => {
  const { onSubmit, data, error } = useCheckIn();

  return (
    <>
      <h3>Check In Pet</h3>
      <button onClick={() => onSubmit('C-1')}>Check in</button>
      {error && (
        <div>Something went wrong: <strong>{error.message}</strong></div>
      )}
      {data && (
        <>
          <div>ID: {data.id}</div>
          <div>Name: {data.name}</div>
        </>
      )}
    </>
  );
}
