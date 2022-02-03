import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profil } from '../models/profil.model';

@Injectable({
  providedIn: 'root',
})
export class CreateAccountService {
  constructor(private http: HttpClient) {}

  createNewUser(user: Profil): Observable<Profil> {
    return this.http.post<Profil>(`${environment.URL}/users`, user);
  }
}
