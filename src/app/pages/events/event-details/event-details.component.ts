import { Subscription } from 'rxjs';
import { Events } from 'src/app/models/Event.model';
import { Game } from 'src/app/models/Game.model';
import { EventService } from 'src/app/services/event.service';
import { GameService } from 'src/app/services/game.service';
import { EventsPage } from '../events.page';
import { User } from 'src/app/models/User.model';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit, OnDestroy {

  @Input() userLoggedIn?: User;
  @Output() private updateUser: EventEmitter<User> = new EventEmitter();
  isParticipating: boolean;
  detailsShown: boolean;
  public event!: Events;
  game!: Game;

  remainingSlots: number = 0;
  public buttonText: string = "Plus d'infos";
  private subscription: Subscription = new Subscription();
  constructor(
    private eventService: EventService,
    private gameService: GameService,
    private eventPage: EventsPage,
  ) {
    this.isParticipating = false;
    this.detailsShown = false;
  }

  ngOnInit(): void {
    this.event = this.eventService.selectedEvent;
    this.remainingSlots =
      this.event.maxPlayer - this.event.registeredUsers.length;
    this.game = this.event.game;
    if (this.userLoggedIn) {
          let registered: User | undefined = this.event.registeredUsers.find(
              user => user.nickname === this.userLoggedIn?.nickname);
              if(registered) this.isParticipating = true;
        }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  participate() {
    this.eventPage.addUserToEvent(this.event);
    this.isParticipating = true;
    this.remainingSlots -= 1;
    this.updateUser.emit(this.userLoggedIn);
  }

  doNotParticipate() {
    this.eventPage.removeUserFromEvent(this.event);
    this.isParticipating = false;
    this.remainingSlots += 1;
    this.updateUser.emit(this.userLoggedIn);
  }

  /**
   * toggles the game-details component
   */
  showDetails() {
    if (this.buttonText === "Plus d'infos") {
      this.subscription.add(
        this.gameService.getGameByUUID(this.event.game.uuid).subscribe(
          {
            next: data => this.game = data,
            error: err => console.log(err)
          }
        )
      );
      this.detailsShown = true;
      this.buttonText = 'Retour';
    } else {
      this.detailsShown = false;
      this.buttonText = "Plus d'infos";
    }
  }
}
