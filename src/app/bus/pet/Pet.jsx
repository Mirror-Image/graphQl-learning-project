import {Counter} from "./Counter";
import {PetsMapping} from "./PetsMapping";
import {SpecialList} from "./SpecialList";
import {Profile} from "./Profile";

export const Pet = () => {

  return (
    <>
      <h2>Pet</h2>
      <Counter />
      <PetsMapping />
      <SpecialList />
      <Profile />
    </>
  );
}
