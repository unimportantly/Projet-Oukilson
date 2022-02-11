import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Events } from '../models/Event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss']
})
export class EventsPage implements OnInit, OnDestroy {

  event?: Events;
  events: Events[] = [];
  buttonPlus: boolean = true;

  private subscription: Subscription = new Subscription;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    let date = new Date(Date.now()).toISOString().slice(0, 19);
    this.searchByDate(date);
    this.events.splice(9);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  searchByUuid(uuid: string) {
    this.subscription.add(
      this.eventService.getEventByUuid(uuid).subscribe(
        {
          next: data => {
            this.event = data;
            this.event.startingDate = new Date(this.event.startingDate);
            this.event.limitDate = new Date(this.event.limitDate);
            if (this.event.endingDate)
              this.event.endingDate = new Date(this.event.endingDate);
          },
          error: err => console.log(err)
        }
      )
    )
  }


  searchByCity(input: string) {
    this.subscription.add(
      this.eventService.getEventsByLocation(input).subscribe(
        {
          next: data => this.events = data,
          error: err => console.log(err)
        }
      )
    )
  }

  searchByDate(input: string) {
    this.subscription.add(
      this.eventService.getEventsByDate(input).subscribe(
        {
          next: data => {
            this.events = data;
            this.events.forEach(
              event => {
                event.startingDate = new Date(event.startingDate);
                event.limitDate = new Date(event.limitDate);
                if (event.endingDate)
                  event.endingDate = new Date(event.endingDate);
              }
            )
          },
          error: err => console.log(err)
        }
      )
    )
  }
}
