import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { MyProfileService } from './../my-profile/my-profile.service';

import { MyProfil } from './../models/MyProfil.model';
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
  myProfil!: MyProfil;

  constructor(
    private service: ProfilListService,
    private myProfilService: MyProfileService,
    private router: Router
  ) {
    this.searchUserForm = new FormGroup({
      nickname: new FormControl(),
    });
  }

  ngOnInit(): void {
    const token: any = localStorage.getItem('id_token');
    const tokenDecoded: any = jwt_decode(token);
    this.myProfilService.getProfil(tokenDecoded.sub).subscribe({
      next: (data) => {
        this.myProfil = data;
      },
      error: (err) => this.router.navigate(['404']),
    });
    this.getRandomProfils();
  }

  private getRandomProfils() {
    this.service.getRandomProfils().subscribe({
      next: (data) => {
        this.profilList = data;
        const myProfilInProfilList = this.profilList.filter((p) => {
          return p.nickname === this.myProfil.nickname;
        });
        for (let e of myProfilInProfilList) {
          this.profilList.splice(this.profilList.indexOf(e), 1);
        }
      },
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

  isDataPresent(): boolean {
    return this.myProfil !== undefined && this.profilList !== undefined;
  }
}
