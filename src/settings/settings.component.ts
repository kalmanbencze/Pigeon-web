import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SettingsService} from '../services/settings.service';

@Component({
  selector: 'settings-component',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css']
})
export class SettingsComponent {
  title = 'Settings';
  settings$: Observable<Object>;

  constructor(private settingsService: SettingsService) {
  }

  fetchSettings(): void {
    this.settings$ = this.settingsService.getSettings();
  }
}
