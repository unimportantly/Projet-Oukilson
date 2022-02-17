import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/Game.model';
import { environment } from 'src/environments/environment';

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
