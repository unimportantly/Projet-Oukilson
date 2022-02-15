import { Events } from "./Event.model";
import { Game } from "./Game.model";

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
}

export interface UserProfile {
  id: number;
  nickname: string;
  iconUrl: string;
  online: Date;
  eventList: Events[];
  friendList: User[];
  deniedList: User[];
  gameList: Game[];
  gameLikedList: Game[];
}