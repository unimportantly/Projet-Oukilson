import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateAccountService } from './create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  createAccountForm: FormGroup;
  constructor(private service: CreateAccountService) {
    this.createAccountForm = new FormGroup(
      {
        nickname: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.email, Validators.required]),
      },
      { validators: this.checkPasswordsMatching('password', 'confirmPassword') }
    );
  }

  ngOnInit() {}

  checkPasswordsMatching(passwordKey: string, confirmPasswordKey: string): any {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        confirmPasswordInput = group.controls[confirmPasswordKey];
      if (passwordInput.value !== confirmPasswordInput.value) {
        return confirmPasswordInput.setErrors({ notEquivalent: true });
      } else {
        return confirmPasswordInput.setErrors(null);
      }
    };
  }

  onFormSubmit() {
    let newUser = { ...this.createAccountForm.value };

    if (this.createAccountForm.valid) {
      this.service.createNewUser(newUser).subscribe((elem) => {
        console.log(elem);
      });
    }
    console.log(this.createAccountForm.value);
  }
}
