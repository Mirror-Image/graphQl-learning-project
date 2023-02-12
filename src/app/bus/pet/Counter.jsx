import {useQueryAvailablePets} from "./hooks/useQueryAvailablePets";

export const Counter = () => {
  const { loading, data, error } = useQueryAvailablePets();

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>We have a problem: {error.message}</p>
  }

  return (
     <p>Available pets: {data.availablePets}</p>
  );
}
