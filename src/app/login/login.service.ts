import { environment } from './../../environments/environment';
import { User } from './../models/User.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as sha256 from 'crypto-js/sha256';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<User> {
    const currentUser = {
      nickname: user.nickname,
      password: sha256(user.password).toString(),
    };
    localStorage.setItem('tokenId', 'maValeur');
    return this.http.post<User>(`${environment.URL}/login`, currentUser);
  }
}
