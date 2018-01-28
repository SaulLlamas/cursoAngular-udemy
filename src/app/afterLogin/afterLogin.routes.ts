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
import {AccountSettingsComponent} from './sections/account-settings/account-settings.component';
import {PromisesComponent} from './promises/promises.component';


const AfterloginRoutes : Routes = [
  {
    path:"",
    component:AfterLoginComponent,
    children:[
      {path:"dashboard", component:DashboardComponent},
      {path:"graphics",component:GraphicsComponent},
      {path:"progress",component:ProgressComponent},
      {path:"account-settings",component:AccountSettingsComponent},
      {path:"promises",component:PromisesComponent},
      {path:"" ,redirectTo:'/dashboard', pathMatch:'full' }
    ]
  }
];



export const AFTERLOGIN_ROUTES = RouterModule.forChild(AfterloginRoutes);
