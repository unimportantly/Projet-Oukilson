import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/models/Game.model';
import { User } from 'src/app/models/User.model';
import { GameService } from 'src/app/services/game.service';
import { GamesPage } from '../games.page';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  @Input() userLoggedIn?: User;
  gameLikedList!: Game[];
  gameLength?: number;
  game!: Game;
  onGameList!: boolean;
  onGameLikedList!: boolean;

  constructor(private gameService: GameService, private page: GamesPage) {}

  ngOnInit(): void {
    // communicates with the games-list component through the gameService to set the game to detail
    this.game = this.gameService.selectedGame;
    if (this.game.minPlayingTime && this.game.maxPlayingTime) {
      this.gameLength = Math.round(
        (this.game.minPlayingTime + this.game.maxPlayingTime) / 2
      );
    } else {
      this.gameLength = 0;
    };
    if (this.userLoggedIn) {
      this.onGameList = false;
      this.onGameLikedList = false;

      let onMyGameList: Game | undefined = this.userLoggedIn.ownedGame.find(
        (game) => game.uuid === this.game.uuid
      );

      let onMyGameLikedList: Game | undefined = this.userLoggedIn.likedGame.find(
        (game) => game.uuid === this.game.uuid
      );

      if (onMyGameList) this.onGameList = true;
      if (onMyGameLikedList) this.onGameLikedList = true;
    }
  }

    onAddGameList(event: Event) {
      event.stopPropagation();
      this.onGameList ? this.removeFromGameList() : this.addToGameList();
    }
  
    onAddGameLikedList(event: Event) {
      event.stopPropagation();
      this.onGameLikedList
        ? this.removeFromGameLikedList()
        : this.addToGameLikedList();
    }
  
    addToGameList() {
      this.gameService.addToGameList(this.game.uuid).subscribe();
      this.onGameList = true;
    }
  
    removeFromGameList() {
      this.gameService.removeFromGameList(this.game.uuid).subscribe();
      this.onGameList = false;
    }
  
    addToGameLikedList() {
      this.gameService.addToGameLikedList(this.game.uuid).subscribe();
      this.onGameLikedList = true;
    }
  
    removeFromGameLikedList() {
      this.gameService.removeFromGameLikedList(this.game.uuid).subscribe();
      this.onGameLikedList = false;
    }
}
