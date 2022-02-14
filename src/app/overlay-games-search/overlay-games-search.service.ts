import { environment } from './../../environments/environment';
import { Game } from './../models/Game.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverlayGamesSearchService {
  constructor(private http: HttpClient) {}

  getGamesByName(name: string): Observable<Game[]> {
    return this.http.get<Game[]>(
      `${environment.URL}/games/search?name=${name}`
    );
  }
}
