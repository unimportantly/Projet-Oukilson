import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/models/Game.model';
import { GameService } from 'src/app/services/game.service';
import { GamesPage } from '../games.page';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() game!: Game;
  @Input() index!: number;
  buttonText: string = "+";
  constructor(private gamesPage: GamesPage, private gameService: GameService) { }

  ngOnInit(): void {
  }

  switchView() {
    if(this.gamesPage.buttonPlus) {
        this.gamesPage.buttonPlus = false;
        this.buttonText = "-";
        this.gamesPage.searchGameByUuid(this.game.uuid);
        this.gameService.gameToDetail = this.game;
    } 
    else {
      this.gamesPage.buttonPlus = true;
      this.buttonText = "+";
    }
    
  }
}
