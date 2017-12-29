import {NgModule} from '@angular/core';
import {MessagesComponent} from './messages.component';
import {MessagesService} from '../services/messages.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../material-module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [
    MessagesComponent,
  ],
  providers: [MessagesService],
  entryComponents: [],
})
export class MessagesModule {

}
