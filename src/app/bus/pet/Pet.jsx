import {Counter} from "./Counter";
import {PetsMapping} from "./PetsMapping";
import {SpecialList} from "./SpecialList";
import {Profile} from "./Profile";
import {CheckInPet} from "./CheckInPet";
import {PetReturned} from "./PetReturned";

export const Pet = () => (
  <>
    <h2>Pet</h2>
    <CheckInPet />
    <PetReturned />
    <Counter />
    <PetsMapping />
    <SpecialList />
    <Profile />
  </>
);
