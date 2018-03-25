/**
 * Archivo de rutas cuando el usuario se ha logeado
 * @author Saúl Llamas Parra
 * @since 15-01-2018
 */


//Importo Router y RouterModule de @angular/router para trabajar con rutas
import  {RouterModule , Routes} from '@angular/router';

//Componentes de las rutas
import {DashboardComponent} from './sections/dashboard/dashboard.component';
import {GraphicsComponent} from './sections/graphics/graphics.component';
import {ProgressComponent} from './sections/progress/progress.component';
import {ThemeSettingsComponent} from './sections/theme-settings/theme-settings.component';
import {PromisesComponent} from './sections/promises/promises.component';
import {RxjsComponent} from './sections/rxjs/rxjs.component';
import {UserProfileComponent} from './sections/user-profile/user-profile.component';
import {UsersComponent} from './maintenance/users/users.component';
import {HospitalsComponent} from './maintenance/hospitals/hospitals.component';
import {HospitalComponent} from './maintenance/hospitals/hospital.component'
import {DoctorsComponent} from './maintenance/doctors/doctors.component';
import {DoctorComponent} from './maintenance/doctors/doctor.component';
import {GlobalSearchComponent} from './maintenance/global-search/global-search.component';


//Importacion del guard para los administradores
import {AdminGuard} from '../services/service.index';



const AfterloginRoutes : Routes = [
      {path:"dashboard", component:DashboardComponent,data:{title:"Dashboard"}},
      {path:"graphics",component:GraphicsComponent,data:{title:"Graficos"}},
      {path:"progress",component:ProgressComponent,data:{title:"Incrementador progress"}},
      {path:"theme-settings",component:ThemeSettingsComponent,data:{title:"Cambiar aparencia"}},
      {path:"promises",component:PromisesComponent,data:{title:"Promesas"}},
      {path:"rxjs",component:RxjsComponent,data:{title:"Observadores"}},
      {path:"profile",component:UserProfileComponent,data:{title:"Perfil de usuario"}},
      {path:"globalsearch/:criteria",component:GlobalSearchComponent,data:{title:"Busqueda Global"}},

      //============================================================
      //Rutas para Mantenimientos
      //============================================================
      {path:"hospitals",component:HospitalsComponent,data:{title:"Mantenimiento de Hospitales"}},
      {path:"hospital/:id",component:HospitalComponent , data:{title:"Hospital"}},
      {path:"doctors",component:DoctorsComponent , data:{title:"Mantenimiento de Médicos"}},
      {path:"doctor/:id",component:DoctorComponent , data:{title:"Médico"}},

      //============================================================
      //Rutas para administradores
      //============================================================
      {path:"users",component:UsersComponent, canActivate:[AdminGuard] , data:{title:"Mantenimiento de usuarios"}},

      {path:"" ,redirectTo:'/dashboard', pathMatch:'full'}
];



export const AFTERLOGIN_ROUTES = RouterModule.forChild(AfterloginRoutes);
