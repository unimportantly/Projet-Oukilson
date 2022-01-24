import { Game } from './Game.model';
import { Profil } from './profil.model';
import { Event } from './Event.model';

export class MyProfil {
  id!: number;
  nickname!: string;
  iconUrl!: string;
  online!: Date;
  eventList!: Event[];
  friendList!: Profil[];
  deniedList!: Profil[];
  gameList!: Game[];
  gameLikedList!: Game[];
}
