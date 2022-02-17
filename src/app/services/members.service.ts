import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  selectedUser!: User;
  constructor(private http: HttpClient) {}

  getRandomUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.URL}/users/random`);
  }

  
  addToFriendlist(username: string): Observable<boolean> {
    return this.http.put<any>(
      `${environment.URL}/users/friend/add/${username}`,
      null
    );
  }

  removeFromFriendList(username: string): Observable<boolean> {
    return this.http.put<any>(
      `${environment.URL}/users/friend/remove/${username}`,
      null
    );
  }

  getUserByNickname(nickname: string): Observable<User> {
    return this.http.get<User>(`${environment.URL}/users/${nickname}`);
  }
}
