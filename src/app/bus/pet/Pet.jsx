import {Counter} from "./Counter";
import {PetsMapping} from "./PetsMapping";
import {SpecialList} from "./SpecialList";
import {Profile} from "./Profile";
import {CheckInPet} from "./CheckInPet";

export const Pet = () => {

  return (
    <>
      <h2>Pet</h2>
      <CheckInPet />
      <Counter />
      <PetsMapping />
      <SpecialList />
      <Profile />
    </>
  );
}
