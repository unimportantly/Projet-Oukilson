import { Profil } from './../models/Profil.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserProfilService {
  constructor(private http: HttpClient) {}

  getProfilByNickname(nickname: string): Observable<Profil> {
    return this.http.get<Profil>(`${environment.URL}/users/${nickname}`);
  }
}
