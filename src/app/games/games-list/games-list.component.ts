import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game.model';
import { GameService } from 'src/app/services/game.service';
import { GamesPage } from '../games.page';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  @Input() games!: Game[];
  public buttonText = "+";
  constructor(private gamesPage: GamesPage, private gameService: GameService) { }

  ngOnInit(): void {
  }

  switchView(game: Game) {
    if(this.gamesPage.buttonPlus) {
        this.gamesPage.buttonPlus = false;
        this.buttonText = "-";
        this.gameService.gameToDetail = game;
    } 
    else {
      this.gamesPage.buttonPlus = true;
      this.buttonText = "+";
    }
  }
}
