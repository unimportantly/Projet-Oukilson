import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { MyProfileService } from './../my-profile/my-profile.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ProfilListService } from './profil-list.service';
import { User, UserLoggedIn } from '../models/User.model';

@Component({
  selector: 'app-profil-list',
  templateUrl: './profil-list.component.html',
  styleUrls: ['./profil-list.component.scss'],
})
export class ProfilListComponent implements OnInit {
  profilList!: User[];
  searchUserForm: FormGroup;
  myProfil!: UserLoggedIn;

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
        this.getRandomProfils();
      },
      error: (err) => this.router.navigate(['404']),
    });
  }

  private getRandomProfils() {
    this.service.getRandomProfils().subscribe({
      next: (data) => {
        if (data)
          this.profilList = data.filter(
            (e) => e.nickname !== this.myProfil.nickname
          );
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
