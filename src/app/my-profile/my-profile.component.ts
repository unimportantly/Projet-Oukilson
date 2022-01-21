import { Component, OnInit } from '@angular/core';
import { Profil } from '../models/profil.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  profil!: Profil;

  constructor() {}

  ngOnInit(): void {}

  onChangeIcon() {
    this.profil.iconUrl = '';
  }
}
