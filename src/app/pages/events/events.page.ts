import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Events } from 'src/app/models/Event.model';
import { EventService } from 'src/app/services/event.service';
import { User } from 'src/app/models/User.model';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss']
})
export class EventsPage implements OnInit, OnDestroy {

  userLoggedIn?: User;
  event!: Events;
  events: Events[] = [];
  buttonPlus: boolean = true;
  userId?: string;
  // instanciate a subscription to centralise each request's subscriptions
  // and then dispose of them
  private subscription: Subscription = new Subscription;

  constructor(private eventService: EventService, private memberService: MembersService) { }

  /**
   * grabs a list of games to display on component loading
   */
  ngOnInit(): void {
    // create a date to supply to the search function 
    let date = new Date(Date.now()).toISOString().slice(0, 19);
    this.searchByDate(date);
    // cut off the array 
    this.events.splice(9);
    if (localStorage.length > 0) {
      const token: any = localStorage.getItem('id_token');
      const tokenDecoded: any = jwt_decode(token);
      this.subscription.add(
        this.memberService.getUserByNickname(tokenDecoded.sub).subscribe({
          next: (data) => {
            if (data)
              this.userLoggedIn = data;
              console.log(this.userLoggedIn);
          }
        })
      )
    }
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
            next: data => { this.events = data; console.log(this.events); },
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

  addUserToEvent(event: Events) {
    this.subscription.add(
      this.eventService.addUserToEvent(event).subscribe(
        {
          next: (data) => {
            if (data) {
            this.subscription.add(
              this.eventService.getEventByUuid(event.uuid).subscribe(
                {
                  next: data => {
                    this.event = data;
                    },
                  error: err => console.log(err)
                }
              )
            );
        }
      },
          error: err => console.log(err)
        }
      )
    )
  }

  removeUserFromEvent(event: Events) {
    this.subscription.add(
      this.eventService.removeUserFromEvent(event).subscribe(
        {
          next: () => {
            this.subscription.add(
              this.eventService.getEventByUuid(event.uuid).subscribe(
                {
                  next: data => this.event = data,
                  error: err => console.log(err)
                }
              )
            );
        },
          error: err => console.log(err)
        }
      )
    )
  }

  refreshUser(user: User): User {
    this.subscription.add(
      this.memberService.getUserByNickname(this.userLoggedIn!.nickname).subscribe({
        next: (data) => {
          if (data) {
          this.userLoggedIn = data;
          console.log(this.userLoggedIn);
          console.log("refreshed :" + this.userLoggedIn.eventList);
          console.log("not" + user.eventList);
          }
        },
        error: (err) => console.log(err)
      })
    )
    return this.userLoggedIn!;
  }
}
