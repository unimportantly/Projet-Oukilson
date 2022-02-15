import { environment } from './../../environments/environment';

import { Observable } from 'rxjs';
import { Events } from '../models/Event.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateEventService {
  constructor(private http: HttpClient) {}

  createEvent(event: Events): Observable<Events> {
    return this.http.post<Events>(`${environment.URL}/events`, event);
  }
}
