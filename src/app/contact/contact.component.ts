
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  subscription: Subscription = new Subscription;
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * sends the content of the contact form to the service
   * @param form contact form 
   */
  submitContactForm(form: FormGroup) {
    console.log(this.contactForm);
    this.subscription.add(
      this.contactService.postMessage(form).subscribe(
        (response: string) => {
          console.log("success?" + response);
        })
    )
  }
}
