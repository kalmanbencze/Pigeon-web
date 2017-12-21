import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConversationsService {
  constructor(private http: HttpClient) {
  }

  public getConversations(): Observable<Object> {
    return this.http.get('./assets/data/conversations.json');
  }
}
