import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  game!: Game;
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.game = this.gameService.gameToDetail;
  }

}
