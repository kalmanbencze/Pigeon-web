import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'contacts-component',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsComponent {
  title = 'Contacts';
  contacts$: Observable<Object>;

  constructor(private contactsService: ContactsService) {
  }

  fetchMessages(): void {
    this.contacts$ = this.contactsService.getContacts();
  }
}
