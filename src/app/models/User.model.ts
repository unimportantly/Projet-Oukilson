import { MyProfilEvents } from './Event.model';
import { Game } from './Game.model';

export interface UserToLog {
  nickname: string;
  password: string;
  email: string;
}

export interface User {
  id: number;
  nickname: string;
  first_name?: string;
  last_name?: string;
  email: string;
  iconUrl?: string;
  eventList: MyProfilEvents[];
  ownedGame: Game[];
  likedGame: Game[];
}

export interface UserLoggedIn {
  id: number;
  nickname: string;
  iconUrl: string;
  online: Date;
  eventList: MyProfilEvents[];
  friendList: User[];
  deniedList: User[];
  ownedGame: Game[];
  likedGame: Game[];
}
