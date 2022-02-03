import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/Event.model';

@Injectable({
  providedIn: 'root',
})
export class CreateEventService {
  constructor(private http: HttpClient) {}

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${environment.URL}/events`, event);
  }
}
