import {Component} from '@angular/core';
import {MessageService} from './message.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pigeon';
  messages$: Observable<Object>;

  constructor(private messageService: MessageService) {
  }

  fetchMessages(): void {
    this.messages$ = this.messageService.getMessages();
  }
}
