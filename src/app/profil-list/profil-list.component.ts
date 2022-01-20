import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(
    private service: ProfilListService,
    private profilService: ProfilService
  ) {}

  ngOnInit(): void {
    this.profilList = this.profilService.getAllProfils();
  }

  onFormSubmit(searchUserForm: NgForm) {
    return this.service.searchByName(searchUserForm.value).subscribe((elem) => {
      console.log(elem);
    });
  }
}
