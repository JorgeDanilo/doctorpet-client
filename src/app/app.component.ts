import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import {MenuItem} from 'primeng/api';


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


items: MenuItem[];

ngOnInit() {
  this.items = [
      {
          label: 'TV', icon: 'fa fa-fw fa-check',
          items: [
              [
                  {
                      label: 'TV 1',
                      items: [{label: 'TV 1.1'},{label: 'TV 1.2'}]
                  },
                  {
                      label: 'TV 2',
                      items: [{label: 'TV 2.1'},{label: 'TV 2.2'}]
                  }
              ],
              [
                  {
                      label: 'TV 3',
                      items: [{label: 'TV 3.1'},{label: 'TV 3.2'}]
                  },
                  {
                      label: 'TV 4',
                      items: [{label: 'TV 4.1'},{label: 'TV 4.2'}]
                  }    
              ]
          ]
      },
      {
          label: 'Sports', icon: 'fa fa-fw fa-soccer-ball-o',
          items: [
              [
                  {
                      label: 'Sports 1',
                      items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
                  },
                  {
                      label: 'Sports 2',
                      items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
                  },

              ],
              [
                  {
                      label: 'Sports 3',
                      items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
                  },
                  {
                      label: 'Sports 4',
                      items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
                  }
              ],
              [
                  {
                      label: 'Sports 5',
                      items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
                  },
                  {
                      label: 'Sports 6',
                      items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
                  }
              ]
          ]
      }
  ];
}

}
