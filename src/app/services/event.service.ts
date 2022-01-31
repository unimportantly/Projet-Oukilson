import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Events } from '../models/Event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEventById(id: string): Observable<Events> {
    return this.http.get<Events>(`${environment.URL}/events/${id}`);
  }

  getEventsByLocation(town: string): Observable<Events[]> {
    return this.http.get<Events[]>(`${environment.URL}/events/search?town=${town}`);
  }

  getEventsByDate(date: Date): Observable<Events[]> {
    return this.http.get<Events[]>(`${environment.URL}/events/search?date=${date}`);
  }
}
