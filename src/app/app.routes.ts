import { HomeComponent } from "./home/home.component";
import { ConvocatoriaComponent } from "./convocatoria/convocatoria.component";
import { RegistroComponent } from "./registro/registro.component";
import { FirstStageCompleteComponent } from "./first-stage-complete/first-stage-complete.component";
import { ActivateUserComponent } from "./activate-user/activate-user.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { RecoverPasswordComponent } from "./recover-password/recover-password.component";
import { RestorePasswordComponent } from "./restore-password/restore-password.component";
import { RedirectAuthenticatedGuard } from "./_guards/redirect-authenticated.guard";
import { SecondFormComponent } from "./second-form/second-form.component";
import { LoggedInGuardGuard } from "./_guards/logged-in-guard.guard";
import { AdminGuardGuard } from "./_guards/admin-guard.guard";
import { AdminDashboardComponent } from "./admin/admin-dashboard/admin-dashboard.component";
import { IdeaDetailComponent } from "./admin/idea-detail/idea-detail.component";
import { SecondStageCompleteComponent } from "./second-stage-complete/second-stage-complete.component";


export const routes = [
    //General routes
    { path:'', component: HomeComponent },
    { path:'brain-race', component: ConvocatoriaComponent },
    
    //No session routes
    { path:'', canActivate: [RedirectAuthenticatedGuard], children: [
        { path:'registro', component: RegistroComponent },
        { path:'iniciar-sesion', component: SignInComponent},
        { path:'accede', component: SignInComponent},
        { path:'recuperar-contrasena', component: RecoverPasswordComponent },
        { path:'restablecer-contrasena/:token', component: RestorePasswordComponent },
        { path:'activar/:token', component: ActivateUserComponent },        
    ]},
    //Session routes
    { path:'', canActivate: [LoggedInGuardGuard], children: [
        { path:'segunda-etapa', component: FirstStageCompleteComponent },
        { path:'segunda-etapa-formulario', component: SecondFormComponent },
        { path:'tercera-etapa', component: SecondStageCompleteComponent },
        
    ]},
    //Admin routes
    { path:'', canActivate: [AdminGuardGuard], children: [
        { path:'admin-dashboard', component: AdminDashboardComponent },
        { path:'detalle-idea/:id', component: IdeaDetailComponent },
    ]}
    
]