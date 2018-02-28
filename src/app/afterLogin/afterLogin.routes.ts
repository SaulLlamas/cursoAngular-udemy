/**
 * Archivo de rutas cuando el usuario se ha logeado
 * @author Saúl Llamas Parra
 * @since 15-01-2018
 */


//Importo Router y RouterModule de @angular/router para trabajar con rutas
import  {RouterModule , Routes} from '@angular/router';

//Componentes de las rutas
import {AfterLoginComponent} from './after-login.component';

import {DashboardComponent} from './sections/dashboard/dashboard.component';
import {GraphicsComponent} from './sections/graphics/graphics.component';
import {ProgressComponent} from './sections/progress/progress.component';
import {ThemeSettingsComponent} from './sections/theme-settings/theme-settings.component';
import {PromisesComponent} from './promises/promises.component';
import {RxjsComponent} from './rxjs/rxjs.component';

//Importacion del guard para el login
import {LoginGuard} from '../services/guards/login.guard';
import {UserProfileComponent} from './sections/user-profile/user-profile.component';


const AfterloginRoutes : Routes = [
  {
    path:"",
    component:AfterLoginComponent,
    canActivate:[LoginGuard],
    children:[
      {path:"dashboard", component:DashboardComponent,data:{title:"Dashboard"}},
      {path:"graphics",component:GraphicsComponent,data:{title:"Graficos"}},
      {path:"progress",component:ProgressComponent,data:{title:"Incrementador progress"}},
      {path:"theme-settings",component:ThemeSettingsComponent,data:{title:"Cambiar aparencia"}},
      {path:"promises",component:PromisesComponent,data:{title:"Promesas"}},
      {path:"rxjs",component:RxjsComponent,data:{title:"Observadores"}},
      {path:"profile",component:UserProfileComponent,data:{title:"Perfil de usuario"}},
      {path:"" ,redirectTo:'/dashboard', pathMatch:'full'}
    ]
  }
];



export const AFTERLOGIN_ROUTES = RouterModule.forChild(AfterloginRoutes);
