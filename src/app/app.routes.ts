import { HomeComponent } from "./home/home.component";
import { ConvocatoriaComponent } from "./convocatoria/convocatoria.component";
import { RegistroComponent } from "./registro/registro.component";
import { FirstStageCompleteComponent } from "./first-stage-complete/first-stage-complete.component";
import { ActivateUserComponent } from "./activate-user/activate-user.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { RecoverPasswordComponent } from "./recover-password/recover-password.component";
import { RestorePasswordComponent } from "./restore-password/restore-password.component";


export const routes = [
    { path:'', component: HomeComponent },
    { path:'brain-race', component: ConvocatoriaComponent },
    { path:'contacto', component: HomeComponent },
    { path:'registro', component: RegistroComponent },
    { path:'segunda-etapa', component: FirstStageCompleteComponent },
    { path:'iniciar-sesion', component: HomeComponent },
    { path:'activar/:token', component: ActivateUserComponent },
    { path:'accede', component: SignInComponent },
    { path:'recuperar-contrasena', component: RecoverPasswordComponent },
    { path:'restablecer-contrasena/:token', component: RestorePasswordComponent },
]