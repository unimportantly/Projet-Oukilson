import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game.model';
import { GameService } from 'src/app/services/game.service';
import { GamesPage } from '../games.page';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {
  @Input() games!: Game[];
  public buttonText = "+";

  constructor(private gamesPage: GamesPage, private gameService: GameService) {}

  ngOnInit(): void {}

  /**
   * toggles the game-search and game-details components
   * @param game the game the user wishes to display details of
   */
  switchView(game: Game) {
    // toggles the game-details component on
    if (this.gamesPage.buttonPlus) {
      this.gamesPage.buttonPlus = false;
      this.buttonText = '-';
      this.gameService.selectedGame = game;
    }
    // toggles the game-search component on
    else {
      this.gamesPage.buttonPlus = true;
      this.buttonText = "+";
    }
  }
}
