import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from '../models/Game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss']
})
export class GamesPage implements OnInit, OnDestroy {

  game?: Game;
  selectedGame?: Game;
  displaySearch: boolean = true;
  displayDetails: boolean = false;

  private subscription: Subscription = new Subscription;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  searchGameByName(input: string) {
    this.subscription.add(this.gameService.getGameByName(input).subscribe({
      next: game => this.game = game,
      error: err => console.log(err)
    }
    ))
  }

  
    
}
