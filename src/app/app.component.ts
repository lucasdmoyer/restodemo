import { Component } from '@angular/core';
import { MessagingService } from "../app/messaging.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message;
  users = [];
  newUser = false;

  constructor(private messagingService: MessagingService) {
  }

  ngOnInit() {
    this.addUser();
    this.messagingService.requestPermission('asdf')
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }
  title = 'Spagetti Lounge';

  addUser(): void {
    const userId = new Date();
  }

}
