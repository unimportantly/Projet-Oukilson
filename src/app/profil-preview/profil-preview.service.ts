import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfilPreviewService {
  constructor(private http: HttpClient) {}

  addToFriendlist(username: string): Observable<boolean> {
    return this.http.put<any>(
      `${environment.URL}/users/friend/add/${username}`,
      null
    );
  }

  removeToFriendList(username: string): Observable<boolean> {
    return this.http.put<any>(
      `${environment.URL}/users/friend/remove/${username}`,
      null
    );
  }
}
