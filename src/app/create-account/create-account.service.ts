import { environment } from './../../environments/environment';

import { Observable } from 'rxjs';
import * as sha256 from 'crypto-js/sha256';
import { UserToLog } from '../models/User.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateAccountService {
  constructor(private http: HttpClient) {}

  createNewUser(user: UserToLog): Observable<UserToLog> {
    const newUser = {
      nickname: user.nickname,
      password: sha256(user.password).toString(),
      email: user.email,
    };
    console.log('newUser' + newUser);

    return this.http.post<UserToLog>(`${environment.URL}/users`, newUser);
  }
}
