import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UserProfilService {
  constructor(private http: HttpClient) {}

  getProfilByNickname(nickname: string): Observable<User> {
    return this.http.get<User>(`${environment.URL}/users/${nickname}`);
  }
}
