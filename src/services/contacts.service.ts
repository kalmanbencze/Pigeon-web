import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContactsService {
  constructor(private http: HttpClient) {
  }

  public getContacts(): Observable<Object> {
    return this.http.get('./assets/data/contacts.json');
  }
}
