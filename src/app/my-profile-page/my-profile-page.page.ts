import { MyProfil } from './../models/MyProfil.model';
import { Router } from '@angular/router';
import { MyProfileService } from './../my-profile/my-profile.service';
import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-my-profile-page',
  templateUrl: './my-profile-page.page.html',
  styleUrls: ['./my-profile-page.page.scss'],
})
export class MyProfilePagePage implements OnInit {
  profil!: MyProfil;
  iconUrl!: string;

  constructor(private service: MyProfileService, private router: Router) {}

  ngOnInit(): void {
    const token: any = localStorage.getItem('id_token');
    const tokenDecoded: any = jwt_decode(token);
    this.service.getProfil(tokenDecoded.sub).subscribe({
      next: (data) => {
        this.profil = data;
        console.log(data);
      },
      error: (err) => this.router.navigate(['404']),
    });
    this.iconUrl =
      'https://upload.wikimedia.org/wikipedia/commons/f/fc/Puzzle.svg';
  }
}
