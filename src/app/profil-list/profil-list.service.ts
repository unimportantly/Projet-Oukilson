import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class ProfilListService {
  constructor(private http: HttpClient) {}

  searchByName(username: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${environment.URL}/users/search?name=${username}`
    );
  }

  getRandomProfils(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.URL}/users/random`);
  }
}
