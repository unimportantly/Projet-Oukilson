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

  game!: Game;
  games: Game[] = [];
  transitoryArray: Game[] = [];
  buttonPlus: boolean = true;

  // instanciate a subscription to centralise each request's subscriptions
  // and then dispose of them
  private subscription: Subscription = new Subscription;

  constructor(private gameService: GameService) { }

  /**
   * grabs a list of games to display on the component on loading
   */
  ngOnInit(): void {
    this.subscription.add(
      this.gameService.getDefaultGames().subscribe(
        {
          next: games => {
            // store the array of games 
            this.transitoryArray = games;
            // queries the db for more complete info of each game
            this.transitoryArray.forEach(game => {
              this.subscription.add(
                this.gameService.getGameByUUID(game.uuid).subscribe(
                  {
                    next: data => this.games.push(data),
                    error: err => console.log(err)
                  }
                )
              )
            }
            )
          },
          error: err => console.log(err)
        }
      )
    )
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
        this.gameService.getGameByName(input).subscribe(
          {
            next: games => {
              this.games = [];
              this.transitoryArray = games;
              this.transitoryArray.forEach(game => {
                this.subscription.add(
                  this.gameService.getGameByUUID(game.uuid).subscribe(
                    {
                      next: data => this.games.push(data),
                      error: err => console.log(err)
                    }
                  )
                )
              }
              )
            },
            error: err => console.log(err)
          }
        )
      )
    }
  }

    /**
   * search games through their uuid
   * @param uuid string identifying the game
   */
  searchGameByUuid(uuid: string) {
    this.subscription.add(
      this.gameService.getGameByUUID(uuid).subscribe(
        {
          next: game => this.game = game,
          error: err => console.log(err)
        }
      )
    )
  }
}
