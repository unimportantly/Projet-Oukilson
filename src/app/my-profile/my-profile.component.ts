import { Component, OnInit } from '@angular/core';
import { Profil } from '../models/profil.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  profil!: Profil;
  iconUrl!: string;

  constructor() {}

  ngOnInit(): void {
    this.iconUrl =
      'https://upload.wikimedia.org/wikipedia/commons/f/fc/Puzzle.svg';
  }

  onChangeIcon() {}
}
