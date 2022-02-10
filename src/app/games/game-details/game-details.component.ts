import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game.model';
import { GameService } from 'src/app/services/game.service';
import { GamesPage } from '../games.page';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  game!: Game;
  constructor(private gameService: GameService, private gamesPage: GamesPage) { }

  ngOnInit(): void {
    this.game = this.gameService.gameToDetail;
  }

}
