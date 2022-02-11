import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/Game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameToDetail!: Game;
  constructor(private http: HttpClient) { }

  getGameByUUID(uuid: string): Observable<Game> {
    return this.http.get<Game>(`${environment.URL}/games/${uuid}`)
  }
  
  getGameByName(name: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.URL}/games/search?name=${name}`);
  }

  getDefaultGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.URL}/games/lastplayed`);
  }
}
