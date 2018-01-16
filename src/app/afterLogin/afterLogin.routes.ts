/**
 * @author Saúl Llamas Parra
 * @since 15-01-2018
 */


//Importo NgModule para poder declarar el modulo
import {NgModule} from '@angular/core';
//Importo Router y RouterModule de @angular/router para trabajar con rutas
import  {RouterModule , Routes} from '@angular/router';

import {AfterLoginComponent} from './after-login.component';

import {DashboardComponent} from './sections/dashboard/dashboard.component';
import {GraphicsComponent} from './sections/graphics/graphics.component';
import {ProgressComponent} from './sections/progress/progress.component';


const AfterloginRoutes : Routes = [
  {
    path:"",
    component:AfterLoginComponent,
    children:[
      {path:"dashboard", component:DashboardComponent},
      {path:"graphics",component:GraphicsComponent},
      {path:"progress",component:ProgressComponent},
      {path:"" ,redirectTo:'/dashboard', pathMatch:'full' }
    ]
  }
];


/*@NgModule({
  imports:[RouterModule.forChild(AfterloginRoutes)],
  exports:[RouterModule]
})

export class AfterLoginRoutesModule{}*/

export const AFTERLOGIN_ROUTES = RouterModule.forChild(AfterloginRoutes);
