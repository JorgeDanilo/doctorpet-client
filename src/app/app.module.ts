import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { LoginComponent } from './pages/login/login.component';
import { TopbarComponent } from './pages/topbar/topbar.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MegaMenuModule} from 'primeng/megamenu';
import { SidemenuComponent } from './pages/sidemenu/sidemenu.component';
import { EmployeeSearchComponent } from './pages/employee/employee-search/employee-search.component';
import { EmployeeNewComponent } from './pages/employee/employee-new/employee-new.component';
import {MenuModule} from 'primeng/menu';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopbarComponent,
    SidemenuComponent,
    EmployeeSearchComponent,
    EmployeeNewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    CardModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    PasswordModule,
    BreadcrumbModule,
    MegaMenuModule,
    MenuModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
