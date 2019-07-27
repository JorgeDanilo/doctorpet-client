import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Doctor Pet';

  public $main: any;
  public sideMenu  = true;
  public topBar: boolean;

  constructor(private router: Router,  private _platformLocation: PlatformLocation) {
    this.topBar = true;
    this.$main = window;
}

  goToPage(page: string, id?: number, isLogin = false) {

    if (isLogin) {
        const url = this._platformLocation.getBaseHrefFromDOM();
        this.$main.location.replace(url);
        return;
    }

    if (id) {
        this.router.navigate([page, id]);
    } else {
        this.router.navigate([page]);
    }
}
}
