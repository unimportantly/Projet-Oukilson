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

  private subscription: Subscription = new Subscription;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.gameService.getDefaultGames().subscribe(
        {
          next: games => {
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

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
