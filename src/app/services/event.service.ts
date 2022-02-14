import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Events } from '../models/Event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // create a game object to inject into same-level components
  eventToDetail!: Events;

  constructor(private http: HttpClient) { }

  /**
   * request the database to search for an event using its uuid
   * @param uuid string identifying the event
   * @returns an event object
   */
  getEventByUuid(uuid: string): Observable<Events> {
    return this.http.get<Events>(`${environment.URL}/events${uuid}`);
  }
  
  /**
   * request the database to search for events using a part or 
   * the entirety of the name of the city they are set to take place in
   * @param town string identifying city
   * @returns an array of event objects
   */
  getEventsByLocation(town: string): Observable<Events[]> {
    return this.http.get<Events[]>(`${environment.URL}/events/search?town=${town}`);
  }

  /**
   * request the database to search for events using a date
   * after which they are to take place
   * @param date string representing the date
   * @returns an array of event objects
   */
  getEventsByDate(date: string): Observable<Events[]> {
    return this.http.get<Events[]>(`${environment.URL}/events/search?date=${date}`);
  }
}
