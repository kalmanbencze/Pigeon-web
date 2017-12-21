import {Component} from '@angular/core';
import {MessagesService} from '../services/messages.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pigeon';
  messages$: Observable<Object>;

  constructor(private messageService: MessagesService) {
  }

  fetchMessages(): void {
    this.messages$ = this.messageService.getMessages();
  }
}
