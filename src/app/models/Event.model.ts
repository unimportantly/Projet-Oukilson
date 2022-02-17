import { Address } from './address.model';
import { Game } from './Game.model';
import { User } from './User.model';

export interface Events {
  uuid: string;
  creator: User;
  game: Game;
  title: string;
  description: string;
  startingDate: Date;
  endingDate?: Date;
  limitDate: Date;
  minPlayer: number;
  maxPlayer: number;
  registeredUsers: User[];
  location: Address;
  isPrivate: boolean;
}

export interface MyEvents {
  uuid: string;
  game: string;
  title: string;
  date: string;
}
