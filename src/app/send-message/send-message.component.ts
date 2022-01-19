import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SendMessageService } from './send-message.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss'],
})
export class SendMessageComponent implements OnInit {
  constructor(private service: SendMessageService) {}

  ngOnInit(): void {}

  onFormSubmit(messageForm: NgForm) {
    return this.service.sendMessage(messageForm.value).subscribe((elem) => {
      console.log(elem);
    });
  }
}
