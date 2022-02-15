export interface Game {
  uuid: string;
  name: string;
  minPlayer?: number;
  maxPlayer?: number;
  minPlayingTime?: number;
  maxPlayingTime?: number;
  minAge?: number;
  creatorName?: string;
  description?: string;
  synopsis?: string;
}
