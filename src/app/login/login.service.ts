import { environment } from './../../environments/environment';
import { UserToLog } from './../models/User.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as sha256 from 'crypto-js/sha256';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(user: UserToLog): Observable<UserToLog> {
    const currentUser = {
      nickname: user.nickname,
      password: sha256(user.password).toString(),
    };
    return this.http.post<UserToLog>(`${environment.URL}/login`, currentUser);
  }
}
