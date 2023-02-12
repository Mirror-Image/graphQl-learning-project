import {useQueryAllAvailablePets} from "./hooks/useQueryAllAvailablePets";

export const SpecialList = () => {
  const { getAllAvailablePets, data, loading } = useQueryAllAvailablePets()


  return (
    <>
      <h3>Special List</h3>
      <button onClick={getAllAvailablePets}>Get a Special List</button>
      {loading ? (
        <p>Loading pets data...</p>
      ) : (
        <ol>
          {data && data.map(({ id, name, weight }) => (
            <li key={id}>
              <span>Name: <strong>{name}</strong></span>
              &nbsp;
              <span>Weight: {weight}</span>
            </li>
          ))}
        </ol>
      )}
    </>
  )
}
