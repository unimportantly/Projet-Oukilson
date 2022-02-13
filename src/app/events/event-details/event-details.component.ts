import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GamesPage } from 'src/app/games/games.page';
import { Events } from 'src/app/models/Event.model';
import { Game } from 'src/app/models/Game.model';
import { EventService } from 'src/app/services/event.service';
import { GameService } from 'src/app/services/game.service';
import { EventsPage } from '../events.page';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit, OnDestroy {

  isParticipating: boolean = false;
  detailsShown: boolean = false;
  public event!: Events;
  game!: Game;

  remainingSlots: number = 0;
  public buttonText: string = "+"
  private subscription: Subscription = new Subscription;
  constructor(private eventService: EventService, private gameService: GameService) { }

  ngOnInit(): void {
    this.event = this.eventService.eventToDetail;
    this.remainingSlots = this.event.maxPlayer - this.event.registeredUsers.length;
    this.game = this.event.game;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  
  participate() {
    
  }

  doNotParticipate() {

  }

  /**
   * toggles the game-details component
   */
  showDetails() {
    if(this.buttonText === "+") {
    this.subscription.add(
      this.gameService.getGameByUUID(this.event.game.uuid).subscribe(
      {
        next: data => {this.game = data; console.log(this.event.game)},
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
