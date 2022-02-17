import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountUpdateService } from '../../services/account-update.service';

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
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      newPassword: new FormControl('', Validators.required),
      pwConfirm: new FormControl('', Validators.required)
    });
    this.errorMessage = "";
    this.successMessage = "";
  }


  ngOnInit() {
  }

  checkPasswords(form: FormGroup): boolean {
    const newPassword = form.controls['newPassword'].value;
    const pwConfirm = form.controls['pwConfirm'].value;
    let isValid: boolean = false;
    if(newPassword === pwConfirm)
      isValid = true;
    return isValid;
  }

  
  RequestResetUser(form: FormGroup) {
    if (this.checkPasswords(form)) {
      this.IsvalidForm = true;
      this.accountUpdateService.resetPassword(this.RequestResetForm.value).subscribe({
        next: () => {
          this.RequestResetForm.reset();
          this.successMessage = "Reset password link sent to email sucessfully.";
          setTimeout(() => {
            this.successMessage = '';
            this.router.navigate(['login']);
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
