import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SettingsService {
  constructor(private http: HttpClient) {
  }

  public getSettings(): Observable<Object> {
    return this.http.get('./assets/data/settings.json');
  }
}
