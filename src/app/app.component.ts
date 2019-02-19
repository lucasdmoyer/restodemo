import { Component } from '@angular/core';
import { MessagingService } from "../app/messaging.service";
import * as $ from 'jquery';

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
  title = "Rick's Cafe";

  addUser(): void {
    const userId = new Date();
  }

  collapse(): void {
    $('.navbar-toggler').click(); //bootstrap 4.x
  }

}
