import { HomeComponent } from "./home/home.component";
import { ConvocatoriaComponent } from "./convocatoria/convocatoria.component";
import { RegistroComponent } from "./registro/registro.component";
import { FirstStageCompleteComponent } from "./first-stage-complete/first-stage-complete.component";


export const routes = [
    { path:'', component: HomeComponent },
    { path:'brain-race', component: ConvocatoriaComponent },
    { path:'contacto', component: HomeComponent },
    { path:'registro', component: RegistroComponent },
    { path:'first-stage-complete', component: FirstStageCompleteComponent },
    { path:'iniciar-sesion', component: HomeComponent }
]