import { Address } from "./address.model";
import { Game } from "./Game.model";
import { Profil } from "./Profil.model";

export interface Events {
  uuid: string;
  creator: Profil;
  game: Game;
  title: string;
  description: string;
  startingDate: Date;
  endingDate?: Date;
  limitDate: Date;
  minPlayer: number;
  maxPlayer: number;
  registeredUsers: Profil[];
  location: Address;
  isPrivate: boolean;
}
