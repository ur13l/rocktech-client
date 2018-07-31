import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';
import { FormWizardModule } from 'angular2-wizard';

import { routes } from './app.routes';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { StepperComponent } from './stepper/stepper.component';
import { FirstStageCompleteComponent } from './first-stage-complete/first-stage-complete.component';
import { UserService } from './_services/user.service';
import { HttpClient } from './_utils/http-client';
import { HttpClientModule } from '@angular/common/http';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    NavbarComponent,
    ConvocatoriaComponent,
    FooterComponent,
    RegistroComponent,
    StepperComponent,
    FirstStageCompleteComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormWizardModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  providers: [
    UserService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
