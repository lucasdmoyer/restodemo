import { Component } from '@angular/core';
import { MessagingService } from "../app/messaging.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message;

  constructor(private messagingService: MessagingService) {
  }

  ngOnInit() {
    const userId = new Date();
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }
  title = 'Spagetti Lounge';
}
