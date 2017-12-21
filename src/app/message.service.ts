import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessageService {
  constructor(private http: HttpClient) {
  }

  public getMessages(): Observable<Object> {
    return this.http.get('./assets/data/messages.json');
  }
}
