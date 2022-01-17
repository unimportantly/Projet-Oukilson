import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Profil } from '../models/profil.model';
import { ProfilService } from '../services/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  @Input() profil!: Profil;
  buttonText!: string;

  constructor(private profilService: ProfilService, private router: Router) {}

  ngOnInit() {
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

  onViewProfil() {
    this.router.navigateByUrl(`profillist/${this.profil.nickname}`);
  }
}
