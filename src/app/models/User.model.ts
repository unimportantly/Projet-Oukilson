import { MyEvents } from './Event.model';
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
  eventList: MyEvents[];
  ownedGame: Game[];
  likedGame: Game[];
  friendList: User[];
  deniedList: User[];
  online?: Date;
}

