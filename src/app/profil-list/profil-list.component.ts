import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Profil } from '../models/profil.model';

import { ProfilService } from '../services/profil.service';
import { ProfilListService } from './profil-list.service';

@Component({
  selector: 'app-profil-list',
  templateUrl: './profil-list.component.html',
  styleUrls: ['./profil-list.component.scss'],
})
export class ProfilListComponent implements OnInit {
  profilList!: Profil[];
  searchUserForm: FormGroup;

  constructor(
    private service: ProfilListService,
    private profilService: ProfilService
  ) {
    this.searchUserForm = new FormGroup({
      nickname: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.profilList = this.profilService.getAllProfils();
    /**this.getAllProfils();*/
  }

  /**private getAllProfils() {
    this.service.getAllProfils().subscribe({
      next: (data) => (this.profilList = data),
      error: (err) => console.error(err),
      complete: () => console.log('user service done'),
    });
  }*/

  onFormSubmit() {
    this.service
      .searchByName(this.searchUserForm.controls['nickname'].value)
      .subscribe({
        next: (data) => console.log(data),
      });
  }
}
