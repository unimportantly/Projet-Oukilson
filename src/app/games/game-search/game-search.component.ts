import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { GamesPage } from '../games.page';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.scss']
})
export class GameSearchComponent implements OnInit {

  searchGameByNameForm: FormGroup;
  constructor(private gamePage: GamesPage) {
    this.searchGameByNameForm = new FormGroup({
      name: new FormControl()
    });
   }

  ngOnInit(): void {
  }

  searchByName() {
    this.gamePage.searchGameByName(this.searchGameByNameForm.controls['name'].value);
  }
}
