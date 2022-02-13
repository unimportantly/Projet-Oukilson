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

  // instanciate a subscription to centralise each request's subscriptions
  // and then dispose of them
  private subscription: Subscription = new Subscription;

  constructor(private eventService: EventService) { }

  /**
   * grabs a list of games to display on component loading
   */
  ngOnInit(): void {
    // create a date to supply to the search function 
    let date = new Date(Date.now()).toISOString().slice(0, 19);
    this.searchByDate(date);
    // cut off the array 
    this.events.splice(9);
  }

  /**
   * cleans up subscriptions
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * search for an event through their uuid
   * @param uuid string identifying the event
   */
  searchByUuid(uuid: string) {
    this.subscription.add(
      this.eventService.getEventByUuid(uuid).subscribe(
        {
          next: data => {
            this.event = data;
            // create new Date objects from the strings recieved in the response
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


  /**
   * search for events by the city they're supposed to take place in
   * @param input string identifying the city
   */
  searchByCity(input: string) {
    if (input.length > 3) {
      this.subscription.add(
        this.eventService.getEventsByLocation(input).subscribe(
          {
            next: data => this.events = data,
            error: err => console.log(err)
          }
        )
      )
    }
  }

  /**
   * search for events by a date after which they're supposed to take place
   * @param input string identifying the date
   */
  searchByDate(input: string) {
    this.subscription.add(
      this.eventService.getEventsByDate(input).subscribe(
        {
          next: data => {
            this.events = data;
            this.events.forEach(
              event => {
                // converts the recieved strings into new Date objects
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
