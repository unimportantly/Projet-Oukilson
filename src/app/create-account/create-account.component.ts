import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onFormSubmit(createAccountForm: NgForm) {
    console.log(createAccountForm);
    return this.http.post<NgForm>('${}', createAccountForm);
  }
}
