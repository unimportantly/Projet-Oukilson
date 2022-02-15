import { Subscription } from 'rxjs';
import { Events } from 'src/app/models/Event.model';
import { Game } from 'src/app/models/Game.model';
import { EventService } from 'src/app/services/event.service';
import { GameService } from 'src/app/services/game.service';
import { EventsPage } from '../events.page';
import jwt_decode from 'jwt-decode';
import { ProfilService } from 'src/app/services/profil.service';
import { User } from 'src/app/models/User.model';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit, OnDestroy {

  isParticipating: boolean;
  detailsShown: boolean;
  public event!: Events;
  game!: Game;
  userId?: string;
  userLoggedIn?: User;

  remainingSlots: number = 0;
  public buttonText: string = "+"
  private subscription: Subscription = new Subscription;
  constructor(private eventService: EventService, private gameService: GameService, private eventPage: EventsPage, private userService: ProfilService) {
    this.isParticipating = false;
    this.detailsShown = false;
  }

  ngOnInit(): void {
    this.event = this.eventService.eventToDetail;
    this.remainingSlots = this.event.maxPlayer - this.event.registeredUsers.length;
    this.game = this.event.game;
console.log(this.event.registeredUsers);
    if (localStorage.length > 0) {
      const token: any = localStorage.getItem('id_token');
      const tokenDecoded: any = jwt_decode(token);
      this.userId = tokenDecoded.sub;
    }
    if (this.userId !== null) {
      this.subscription.add(
        this.userService.getProfilByNickname(this.userId!).subscribe({
          next: data => {this.userLoggedIn = data;
          let registered: User | undefined = this.event.registeredUsers.find(
              user => user.nickname === this.userLoggedIn?.nickname);
              if(registered) this.isParticipating = true;},
          error: err => console.log(err)
        })
      );      
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  participate() {
    this.eventPage.addUserToEvent(this.event);
    this.isParticipating = true;
    this.remainingSlots -= 1;
    console.log(this.event.registeredUsers);
  }

  doNotParticipate() {
    this.eventPage.removeUserFromEvent(this.event);
    this.isParticipating = false;
    this.remainingSlots += 1;
    console.log(this.event.registeredUsers);
  }

  /**
   * toggles the game-details component
   */
  showDetails() {
    if (this.buttonText === "+") {
      this.subscription.add(
        this.gameService.getGameByUUID(this.event.game.uuid).subscribe(
          {
            next: data => { this.game = data; console.log(this.event.game) },
            error: err => console.log(err)
          }
        )
      );
      this.detailsShown = true;
      this.buttonText = "-";
    }
    else {
      this.detailsShown = false;
      this.buttonText = "+";
    }
  }
}
