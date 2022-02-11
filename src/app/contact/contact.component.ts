import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private contactService: ContactService) {
    this.contactForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        subject: new FormControl('', [Validators.required]),
        content: new FormControl()
      }
    )
   }

  ngOnInit(): void {
  }

  submitContactForm(form: FormGroup) {
    console.log(this.contactForm);
    this.contactService.postMessage(form).subscribe(
      (response) => {
        console.log("success?");
      }
    )
  }
}
