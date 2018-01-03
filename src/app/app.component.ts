import {OverlayContainer} from '@angular/cdk/overlay';
import {Component, ElementRef, ViewEncapsulation} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'entry-component',
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class EntryComponent {}


@Component({
  moduleId: module.id,
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AppComponent {
  dark = false;
  navItems = [
    {name: 'Messages', route: '/messages'},
    {name: 'Contacts', route: '/contacts'},
    {name: 'Settings', route: '/settings'},
    {name: 'About', route: '/about'}
  ];

  constructor(
    private _element: ElementRef,
    private _overlayContainer: OverlayContainer) {}

  toggleFullscreen() {
    const elem = this._element.nativeElement.querySelector('.demo-content');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  toggleTheme() {
    const darkThemeClass = 'unicorn-dark-theme';

    this.dark = !this.dark;

    if (this.dark) {
      this._element.nativeElement.classList.add(darkThemeClass);
      this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
    } else {
      this._element.nativeElement.classList.remove(darkThemeClass);
      this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
    }
  }
}
