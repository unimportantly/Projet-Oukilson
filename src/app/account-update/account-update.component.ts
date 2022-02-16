import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountUpdateService } from '../services/account-update.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss']
})
export class AccountUpdateComponent implements OnInit {

  RequestResetForm: FormGroup;
  forbiddenEmails: any;
  errorMessage: string;
  successMessage: string;
  IsvalidForm = true;

  constructor(
    private accountUpdateService: AccountUpdateService,
    private router: Router,
   ) {
    this.RequestResetForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
    });
    this.errorMessage = "Invalid";
    this.successMessage = "Password updated";
  }


  ngOnInit() {
  }


  RequestResetUser(form: FormGroup) {
    console.log(form)
    if (form.valid) {
      this.IsvalidForm = true;
      this.accountUpdateService.resetPassword(this.RequestResetForm.value).subscribe({
        next: () => {
          this.RequestResetForm.reset();
          this.successMessage = "Reset password link send to email sucessfully.";
          setTimeout(() => {
            this.successMessage = '';
            this.router.navigate(['sign-in']);
          }, 3000);
        },
        error: err => {

          if (err.error.message) {
            this.errorMessage = err.error.message;
          }
        }
      });
    } else {
      this.IsvalidForm = false;
    }
  }
}
