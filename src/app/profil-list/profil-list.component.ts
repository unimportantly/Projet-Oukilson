import { Profil } from '../models/Profil.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ProfilListService } from './profil-list.service';

@Component({
  selector: 'app-profil-list',
  templateUrl: './profil-list.component.html',
  styleUrls: ['./profil-list.component.scss'],
})
export class ProfilListComponent implements OnInit {
  profilList!: Profil[];
  searchUserForm: FormGroup;

  constructor(private service: ProfilListService) {
    this.searchUserForm = new FormGroup({
      nickname: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.getRandomProfils();
  }

  private getRandomProfils() {
    this.service.getRandomProfils().subscribe({
      next: (data) => (this.profilList = data),
      error: (err) => console.error(err),
      complete: () => console.log('user service done'),
    });
  }

  onFormSubmit() {
    this.service
      .searchByName(this.searchUserForm.controls['nickname'].value)
      .subscribe({
        next: (data) => {
          console.log(data);

          if (Array.isArray(data) && data.length !== 0) this.profilList = data;
        },
        error: (err) => console.error(err),
        complete: () => console.log('user service done'),
      });
  }
}
