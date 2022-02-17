import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/User.model';
import { Subscription } from 'rxjs';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-profil-list',
  templateUrl: './profil-list.component.html',
  styleUrls: ['./profil-list.component.scss'],
})
export class ProfilListComponent implements OnInit, OnDestroy {
  profilList!: User[];
  searchUserForm: FormGroup;
  userLoggedIn!: User;
  private subscription: Subscription = new Subscription;

  constructor(
    private service: MembersService,
    private router: Router
  ) {
    this.searchUserForm = new FormGroup({
      nickname: new FormControl(),
    });
  }

  ngOnInit(): void {
    if (localStorage.length > 0) {
      const token: any = localStorage.getItem('id_token');
      const tokenDecoded: any = jwt_decode(token);
      this.subscription.add(
        this.service.getUserByNickname(tokenDecoded.sub).subscribe({
          next: (data) => {
            this.userLoggedIn = data;
            this.getRandomProfils();
          },
          error: () => this.router.navigate(['404']),
        })
    )
    }
    else {
      this.subscription.add(
        this.service.getRandomUsers().subscribe({
          next: (data) => this.profilList = data,
          error: (err) => console.log(err)
        })
      )
    }
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }


  private getRandomProfils() {
    this.service.getRandomUsers().subscribe({
      next: (data) => {
        if (data)
          this.profilList = data.filter(
            (e) => e.nickname !== this.userLoggedIn.nickname
          );
      },
      error: (err) => console.error(err),
    });
  }

  onFormSubmit() {
    this.service
      .getUserByNickname(this.searchUserForm.controls['nickname'].value)
      .subscribe({
        next: (data) => {
          if (Array.isArray(data) && data.length !== 0) this.profilList = data;
        },
        error: (err) => console.error(err),
      });
  }

  isDataPresent(): boolean {
    return this.userLoggedIn !== undefined && this.profilList !== undefined;
  }
}
