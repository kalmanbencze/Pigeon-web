import {NgModule} from '@angular/core';
import {ContactsComponent} from './contacts.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../material-module';
import {ContactsService} from '../services/contacts.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [
    ContactsComponent,
  ],
  providers: [ContactsService],
  entryComponents: [],
})
export class ContactsModule {

}
