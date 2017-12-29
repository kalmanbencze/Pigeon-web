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

export const DEMO_APP_ROUTES: Routes = [
  {path: '', component: AppComponent, children: [
    {path: '', component: MessagesComponent}
  ]}
];
