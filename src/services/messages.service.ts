import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessagesService {
  constructor(private http: HttpClient) {
  }

  public getMessages(): Observable<Object> {

    return this.http.get('./assets/data/messages.json', {
      params: {
        conversationId: 'id1234',
        count: '50'
      }
    });
  }
}
