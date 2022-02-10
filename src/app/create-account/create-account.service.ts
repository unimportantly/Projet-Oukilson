import { User } from './../models/User.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as sha256 from 'crypto-js/sha256';

@Injectable({
  providedIn: 'root',
})
export class CreateAccountService {
  constructor(private http: HttpClient) {}

  createNewUser(user: User): Observable<User> {
    const newUser = {
      nickname: user.nickname,
      password: sha256(user.password).toString(),
      email: user.email,
    };
    console.log('newUser' + newUser);

    return this.http.post<User>(`${environment.URL}/users`, newUser);
  }
}
