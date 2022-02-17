import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from 'src/app/models/Event.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CreateEventService {
  constructor(private http: HttpClient) {}

  createEvent(event: Events): Observable<Events> {
    return this.http.post<Events>(`${environment.URL}/events`, event);
  }
}
