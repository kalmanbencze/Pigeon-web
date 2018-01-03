import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../material-module';
import {SettingsService} from '../services/settings.service';
import {SettingsComponent} from './settings.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [
    SettingsComponent,
  ],
  providers: [SettingsService],
  entryComponents: [],
})
export class SettingsModule {

}
