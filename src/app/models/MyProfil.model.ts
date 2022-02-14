import { Events } from './Event.model';
import { Game } from './Game.model';
import { Profil } from './Profil.model';

export class User {
  id!: number;
  nickname!: string;
  iconUrl!: string;
  online!: Date;
  eventList!: Events[];
  friendList!: Profil[];
  deniedList!: Profil[];
  gameList!: Game[];
  gameLikedList!: Game[];
}
