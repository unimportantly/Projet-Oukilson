import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public loginForm: FormGroup = this.fb.group({
    nickname: ['', Validators.required],
    password: ['', Validators.required],
  });

  onCreateAccount() {
    this.router.navigateByUrl('create-account');
  }

  onFormSubmit(loginForm: FormGroup) {
    console.log(loginForm.value);
    return this.service.login(loginForm.value).subscribe((elem) => {
      console.log(elem);
    });
  }
}
