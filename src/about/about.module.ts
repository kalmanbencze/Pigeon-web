import {NgModule} from '@angular/core';
import {AboutComponent} from './about.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../material-module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [],
  declarations: [
    AboutComponent,
  ],
  providers: [],
  entryComponents: [],
})
export class AboutModule {

}
