import { HomeComponent } from "./home/home.component";
import { ConvocatoriaComponent } from "./convocatoria/convocatoria.component";
import { RegistroComponent } from "./registro/registro.component";


export const routes = [
    { path:'', component: HomeComponent },
    { path:'convocatoria', component: ConvocatoriaComponent },
    { path:'contacto', component: HomeComponent },
    { path:'registro', component: RegistroComponent },
    { path:'iniciar-sesion', component: HomeComponent }
]