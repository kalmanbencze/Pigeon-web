/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MessagesComponent} from '../messages/messages.component';
import {AboutComponent} from '../about/about.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {SettingsComponent} from '../settings/settings.component';

export const DEMO_APP_ROUTES: Routes = [
  {path: '', component: AppComponent, children: [
    {path: 'messages', component: MessagesComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'settings', component: SettingsComponent},
    {path: 'about', component: AboutComponent}
  ]}
];
