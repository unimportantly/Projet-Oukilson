import { Address } from "./address.model";
import { Game } from "./Game.model";
import { User } from "./MyProfil.model";

export interface Events {
  uuid: string;
  creator: User;
  game: Game;
  title: string;
  description: string;
  startingDate: Date;
  endDate?: Date;
  limitDate: Date;
  minPlayer: number;
  maxPlayer: number;
  registeredUsers: User[];
  location: Address;
}
