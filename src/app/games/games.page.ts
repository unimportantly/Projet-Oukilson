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

  games: Game[] = []; 
  selectedGame?: Game;
  buttonPlus: boolean = true;

  private subscription: Subscription = new Subscription;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.subscription.add(this.gameService.getDefaultGames().subscribe({
      next: games => this.games = games,
      error: err => console.log(err)
    })
    )
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  searchGameByName(input: string) {
    this.subscription.add(this.gameService.getGameByName(input).subscribe({
      next: games => this.games = games,
      error: err => console.log(err)
    }
    ))
  }

  
    
}
