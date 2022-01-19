import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfilListService {
  constructor(private http: HttpClient) {}

  searchByName(user: Object): Observable<Object> {
    return this.http.get<Object>('/users/{{ username.value }}');
  }
}
