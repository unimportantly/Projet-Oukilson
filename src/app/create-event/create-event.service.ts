import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateEventService {
  constructor(private http: HttpClient) {}

  sendNewEvent(event: Object): Observable<Object> {
    return this.http.post<Object>('', event);
  }
}
