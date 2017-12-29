import {FullscreenOverlayContainer, OverlayContainer} from '@angular/cdk/overlay';
import {CommonModule} from '@angular/common';
import {ApplicationRef, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LayoutModule} from '@angular/cdk/layout';
import {DEMO_APP_ROUTES} from './routes';
import {AppComponent, EntryComponent} from './app.component';
import {MaterialModule} from '../material-module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MessagesModule} from '../messages/messages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot(DEMO_APP_ROUTES),
    LayoutModule,
    MessagesModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  declarations: [
    EntryComponent,
    AppComponent
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer},
  ],
  entryComponents: [
    EntryComponent,
    AppComponent
  ],
})
export class AppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(EntryComponent);
  }
}
