import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/Game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  // create a game object to inject into same-level components
  selectedGame!: Game;

  constructor(private http: HttpClient) {}

  /**
   * request the database to search for a game using its uuid
   * @param uuid string identifying the game
   * @returns a game object
   */
  getGameByUUID(uuid: string): Observable<Game> {
    return this.http.get<Game>(`${environment.URL}/games/${uuid}`);
  }

  /**
   * request the database to search for games using a part or
   * the entirety of its name
   * @param name string identifying the game
   * @returns an array of game objects
   */
  getGameByName(name: string): Observable<Game[]> {
    return this.http.get<Game[]>(
      `${environment.URL}/games/search?name=${name}`
    );
  }

  /**
   * request the database for default games to display as
   * placeholders for search results
   * @returns an array of game objects
   */
  getDefaultGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.URL}/games/lastplayed`);
  }

  addToGameList(gameUuid: string): Observable<boolean> {
    let dto: { uuid: string } = { uuid: gameUuid };
    return this.http.put<boolean>(
      `${environment.URL}/users/games/owned/add`,
      dto
    );
  }

  removeFromGameList(gameUuid: string): Observable<boolean> {
    let dto: { uuid: string } = { uuid: gameUuid };
    return this.http.put<boolean>(
      `${environment.URL}/users/games/owned/remove`,
      dto
    );
  }

  addToGameLikedList(gameUuid: string): Observable<boolean> {
    let dto: { uuid: string } = { uuid: gameUuid };
    return this.http.put<boolean>(
      `${environment.URL}/users/games/liked/add`,
      dto
    );
  }

  removeFromGameLikedList(gameUuid: string): Observable<boolean> {
    let dto: { uuid: string } = { uuid: gameUuid };
    return this.http.put<boolean>(
      `${environment.URL}/users/games/liked/remove`,
      dto
    );
  }
}
