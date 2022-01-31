import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateAccountService {
  constructor(private http: HttpClient) {}

  sendNewUser(user: Object): Observable<Object> {
    return this.http.post<Object>(`${environment.URL}/users`, user);
  }
}
