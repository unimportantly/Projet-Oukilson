import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profil } from '../models/profil.model';
import { ProfilService } from '../services/profil.service';

@Component({
  selector: 'app-profil-list',
  templateUrl: './profil-list.component.html',
  styleUrls: ['./profil-list.component.scss'],
})
export class ProfilListComponent implements OnInit {
  profilList!: Profil[];

  constructor(private http: HttpClient, private profilService: ProfilService) {}

  ngOnInit(): void {
    this.profilList = this.profilService.getAllProfils();
  }

  onFormSubmit(searchUserForm: NgForm) {
    console.log(searchUserForm);
  }
}
