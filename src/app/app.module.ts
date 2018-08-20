import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from 'ng2-ckeditor';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';

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
import { ActivateUserComponent } from './activate-user/activate-user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { VideoModalComponent } from './video-modal/video-modal.component';
import { SecondFormComponent } from './second-form/second-form.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { IdeaDetailComponent } from './admin/idea-detail/idea-detail.component';


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
    LoadingScreenComponent,
    ActivateUserComponent,
    SignInComponent,
    RecoverPasswordComponent,
    RestorePasswordComponent,
    VideoModalComponent,
    SecondFormComponent,
    AdminDashboardComponent,
    IdeaDetailComponent
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CKEditorModule,
    RouterModule.forRoot(routes),

  ],
  providers: [
    UserService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
