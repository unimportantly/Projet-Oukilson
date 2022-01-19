import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateAccountService } from './create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  constructor(private service: CreateAccountService) {}

  ngOnInit() {}

  onFormSubmit(createAccountForm: NgForm) {
    return this.service
      .sendNewUser(createAccountForm.value)
      .subscribe((elem) => {
        console.log(elem);
      });
  }
}
