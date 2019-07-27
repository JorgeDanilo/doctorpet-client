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
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './topbar/topbar.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MegaMenuModule} from 'primeng/megamenu';


@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    LoginComponent,
    TopbarComponent,
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
    MegaMenuModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
