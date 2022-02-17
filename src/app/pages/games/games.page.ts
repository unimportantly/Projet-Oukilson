import jwt_decode from 'jwt-decode';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game.model';
import { User } from 'src/app/models/User.model';
import { GameService } from 'src/app/services/game.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit, OnDestroy {

  userLoggedIn?: User;
  game!: Game;
  games: Game[] = [];
  transitoryArray: Game[] = [];
  buttonPlus: boolean = true;

  // instanciate a subscription to centralise each request's subscriptions
  // and then dispose of them
  private subscription: Subscription = new Subscription;

  constructor(
    private gameService: GameService,
    private membersService: MembersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.length > 0) {
      const token: any = localStorage.getItem('id_token');
      const tokenDecoded: any = jwt_decode(token);
      this.subscription.add(
        this.membersService.getUserByNickname(tokenDecoded.sub).subscribe({
          next: (data) => {
            this.userLoggedIn = data;
          },
          error: () => this.router.navigate(['404'])
        })
      );
    }

    /**
     * grabs a list of games to display on the component on loading
     */
    this.subscription.add(
      this.gameService.getDefaultGames().subscribe({
        next: (games) => {
          // store the array of games
          this.transitoryArray = games;
          // queries the db for more complete info of each game
          this.transitoryArray.forEach((game) => {
            this.subscription.add(
              this.gameService.getGameByUUID(game.uuid).subscribe({
                next: (data) => this.games.push(data),
                error: (err) => console.log(err),
              })
            );
          });
        },
        error: (err) => console.log(err),
      })
    );
  }

  /**
   * cleans up subscriptions
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * search for a game with the name provided
   * @param input name of the game
   */
  searchGameByName(input: string) {
    if (input.length > 2) {
      this.subscription.add(
        this.gameService.getGameByName(input).subscribe({
          next: (games) => {
            this.games = [];
            this.transitoryArray = games;
            this.transitoryArray.forEach((game) => {
              this.subscription.add(
                this.gameService.getGameByUUID(game.uuid).subscribe({
                  next: (data) => this.games.push(data),
                  error: (err) => console.log(err),
                })
              );
            });
          },
          error: (err) => console.log(err),
        })
      );
    }
  }

  /**
   * search games through their uuid
   * @param uuid string identifying the game
   */
  searchGameByUuid(uuid: string) {
    this.subscription.add(
      this.gameService.getGameByUUID(uuid).subscribe({
        next: (game) => (this.game = game),
        error: (err) => console.log(err),
      })
    );
  }

  addToGameList(uuid: string) {
    this.subscription.add(
      this.gameService.addToGameList(uuid).subscribe()
    )
  }

  removeFromGameList(uuid: string) {
    this.subscription.add(
      this.gameService.removeFromGameList(uuid).subscribe()
      )
  }

  addToGameLikedList(uuid: string) {
    this.subscription.add(
      this.gameService.addToGameLikedList(uuid).subscribe()
      )
  }

  removeFromGameLikedList(uuid: string) {
    this.subscription.add(
      this.gameService.removeFromGameLikedList(uuid).subscribe()
      )
  }
}
