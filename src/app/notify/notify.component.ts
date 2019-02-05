import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  model = "";
  submitted = false;
  onSubmit() { this.submitted = true; }
  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.messagingService.sendMessage(this.model);

  }

}
