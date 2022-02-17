import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
   }

  ngOnInit(): void {
  }

  /**
   * search a game by its name
   */
  searchByName() {
    this.gamePage.searchGameByName(this.searchGameByNameForm.controls['name'].value);
  }
}
