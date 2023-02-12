import {useQueryAllPets} from "./hooks/useQueryAllPets";

export const PetsMapping = () => {
  const { loading, data } = useQueryAllPets()

  return loading ? (
      <p>Loading pets data...</p>
    ) : (
    <ul>
      {data && data.map(({ id, name, weight }) => (
        <li key={id}>
          <span>Name: <strong>{name}</strong></span>
          &nbsp;
          <span>Weight: {weight}</span>
        </li>
      ))}
    </ul>
  )
}
