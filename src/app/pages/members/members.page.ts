import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { MembersService } from 'src/app/services/members.service';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss']
})
export class MembersPage implements OnInit, OnDestroy {

  userLoggedIn?: User;
  users: User[] = [];
  user!: User;
  buttonPlus: boolean = true;
  onFriendList: boolean = false;
  onDeniedList: boolean = false;

  private subscription: Subscription = new Subscription;
  constructor(
    private memberService: MembersService,
    private router: Router
  ) { }


  // component life-cycle

  ngOnInit(): void {
    if (localStorage.length > 0) {
      const token: any = localStorage.getItem('id_token');
      const tokenDecoded: any = jwt_decode(token);
      this.subscription.add(
        this.memberService.getUserByNickname(tokenDecoded.sub).subscribe({
          next: (data) => {
            if (data)
              this.userLoggedIn = data;
          },
          error: () => this.router.navigate(['404'])
        })
      );
    }
    this.getRandomUsers();

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  // page methods

  getUserByNickname(username: string) {
    this.subscription.add(
      this.memberService.getUserByNickname(username).subscribe({
        next: (data) => {
          if (data)
            this.user = data
        },
        error: (err) => console.log(err)
      })
    )
  }

  getUsersByNickname(username: string) {
    this.subscription.add(
      this.memberService.getUsersByNickname(username).subscribe({
        next: (data) => {
          if (data)
            this.users = data
        },
        error: (err) => console.log(err)
      })
    )
  }

  getRandomUsers() {
    this.subscription.add(
      this.memberService.getRandomUsers().subscribe({
        next: (data) => {
          if (data) {
            if (this.userLoggedIn) {
              let array = data.filter(
                (e) => e.nickname !== this.userLoggedIn?.nickname);
              array.forEach((user) => {
                this.subscription.add(
                  this.memberService.getUserByNickname(user.nickname).subscribe({
                    next: (data) => {
                      if (data)
                        this.users.push(data);
                    },
                    error: (err) => console.log(err)
                  })
                )
              }
              )
            }
            else {
              data.forEach((user) => {
                this.subscription.add(
                  this.memberService.getUserByNickname(user.nickname).subscribe({
                    next: (data) => {
                      if (data)
                        this.users.push(data);
                    },
                    error: (err) => console.log(err)
                  })
                )
              }
              )
            }
          }
        },
        error: (err) => console.log(err)
      })
    )
  }

  addToFriendList(username: string) {
    this.subscription.add(
      this.memberService.addToFriendlist(username).subscribe({
        next: (data) => {
          if (data)
            this.onFriendList = data
        },
        error: (err) => console.log(err)
      })
    )
  }

  removeFromFriendList(username: string) {
    this.subscription.add(
      this.memberService.removeFromFriendList(username).subscribe({
        next: (data) => {
          if (data)
            this.onFriendList = data
        },
        error: (err) => console.log(err)
      })
    )
  }

  isDataPresent(): boolean {
    return this.userLoggedIn !== undefined && this.users !== undefined;
  }


}


