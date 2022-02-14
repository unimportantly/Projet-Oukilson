import { MyProfil } from './../models/MyProfil.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyProfileService {
  constructor(private http: HttpClient) {}

  getProfil(username: string): Observable<MyProfil> {
    return this.http.get<MyProfil>(`${environment.URL}/users/${username}`);
  }
}
