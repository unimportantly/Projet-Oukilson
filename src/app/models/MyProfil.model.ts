import { Profil } from './Profil.model';
import { Game } from './Game.model';
import { Event } from './Event.model';

export interface MyProfil {
  id: number;
  nickname: string;
  email: string;
  iconUrl: string;
  eventList: Event[];
  friendList: Profil[];
  deniedList: Profil[];
  gameList: Game[];
  gameLikedList: Game[];
}
