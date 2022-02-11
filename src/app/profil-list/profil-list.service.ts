import { Profil } from './../models/Profil.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfilListService {
  constructor(private http: HttpClient) {}

  searchByName(username: string): Observable<Profil> {
    return this.http.get<Profil>(`${environment.URL}/users/${username}`);
  }
}
