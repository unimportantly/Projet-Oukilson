import { Router } from '@angular/router';
import { Component, Injectable, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/models/User.model';
import { MembersService } from 'src/app/services/members.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-my-profile-page',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
  profil!: User;
  iconUrl!: string;

  constructor(private service: MembersService, private router: Router) {}

  ngOnInit(): void {
    const token: any = localStorage.getItem('id_token');
    const tokenDecoded: any = jwt_decode(token);
    this.service.getUserByNickname(tokenDecoded.sub).subscribe({
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
