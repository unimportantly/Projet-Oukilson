import { UserLoggedIn } from './../../models/User.model';
import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/models/Game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  @Input() myProfil!: UserLoggedIn;
  gameList!: Game[];
  gameLikedList!: Game[];
  gameLength?: number;
  game!: Game;
  onGameList!: boolean;
  onGameLikedList!: boolean;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    console.log(this.myProfil);

    // communicates with the games-list component through the gameService to set the game to detail
    this.game = this.gameService.gameToDetail;
    if (this.game.minPlayingTime && this.game.maxPlayingTime) {
      this.gameLength = Math.round(
        (this.game.minPlayingTime + this.game.maxPlayingTime) / 2
      );
    } else {
      this.gameLength = 0;
    }
    if (this.myProfil) {
      this.onGameList = false;
      this.onGameLikedList = false;

      let onMyGameList: Game | undefined = this.myProfil.ownedGame.find(
        (game) => game.uuid === this.game.uuid
      );

      let onMyGameLikedList: Game | undefined = this.myProfil.likedGame.find(
        (game) => game.uuid === this.game.uuid
      );

      if (onMyGameList) this.onGameList = true;
      if (onMyGameLikedList) this.onGameLikedList = true;
    }
    console.log(this.game.uuid);
  }

  onAddGameList(event: Event) {
    event.stopPropagation();
    this.onGameList ? this.removeToGameList() : this.addToGameList();
  }

  onAddGameLikedList(event: Event) {
    event.stopPropagation();
    this.onGameLikedList
      ? this.removeToGameLikedList()
      : this.addToGameLikedList();
  }

  addToGameList() {
    this.gameService.addToGameList(this.game.uuid).subscribe();
    this.onGameList = true;
  }

  removeToGameList() {
    this.gameService.removeToGameList(this.game.uuid).subscribe();
    this.onGameList = false;
  }

  addToGameLikedList() {
    this.gameService.addToGameLikedList(this.game.uuid).subscribe();
    this.onGameLikedList = true;
  }

  removeToGameLikedList() {
    this.gameService.removeToGameLikedList(this.game.uuid).subscribe();
    this.onGameLikedList = false;
  }
}
