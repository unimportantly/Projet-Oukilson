import { environment } from './../../environments/environment';

import { Observable } from 'rxjs';
import { UserProfile } from '../models/User.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyProfileService {
  constructor(private http: HttpClient) {}

  getProfil(username: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${environment.URL}/users/${username}`);
  }
}
