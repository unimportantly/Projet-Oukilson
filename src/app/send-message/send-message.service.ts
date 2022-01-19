import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendMessageService {
  constructor(private http: HttpClient) {}

  sendMessage(message: Object): Observable<Object> {
    return this.http.post<Object>('', message);
  }
}
