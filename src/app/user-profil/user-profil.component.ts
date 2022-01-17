import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profil } from '../models/profil.model';
import { ProfilService } from '../services/profil.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss'],
})
export class UserProfilComponent implements OnInit {
  profil!: Profil;
  buttonText!: string;

  constructor(
    private profilService: ProfilService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const profilNickname = this.route.snapshot.params['nickname'];
    this.profil = this.profilService.getProfilByNickname(profilNickname);
    this.buttonText = 'Add counter';
    if (this.profil.iconUrl === '') {
      this.profil.iconUrl =
        'https://upload.wikimedia.org/wikipedia/commons/f/fc/Puzzle.svg';
    }
  }

  onAddCounter() {
    if (this.buttonText == 'Add counter') {
      this.profilService.addProfilCountById(this.profil.id, 'count');
      this.buttonText = 'Remove counter';
    } else {
      this.profilService.addProfilCountById(this.profil.id, 'uncount');
      this.buttonText = 'Add counter';
    }
  }

  onChangeIcon() {
    this.profil.iconUrl = '';
  }
}
