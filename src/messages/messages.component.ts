import {Component} from '@angular/core';
import {MessagesService} from '../services/messages.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'messages-component',
  templateUrl: 'messages.component.html',
  styleUrls: ['messages.component.css']
})
export class MessagesComponent {
  title = 'Pigeon';
  messages$: Observable<Object>;

  constructor(private messageService: MessagesService) {
  }

  fetchMessages(): void {
    this.messages$ = this.messageService.getMessages();
  }
}
