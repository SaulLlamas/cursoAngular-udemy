/**
 * @author Saul Llamas Parra
 * @since 13-01-2018
 *
 * Archivo donde se encuentra el modulo de rutas principal de configuración de rutas
 *
 */

//Importo NgModule para poder declarar el modulo
import {NgModule} from '@angular/core';
//Importo Router y RouterModule de @angular/router para trabajar con rutas
import  {RouterModule , Routes} from '@angular/router';


/*
===========================================================================================
Importación de los componentes a los que van a referirise las rutas
===========================================================================================
 */
import {LoginComponent} from "../login/login.component";
import {DashboardComponent} from "../afterLogin/sections/dashboard/dashboard.component";
import {GraphicsComponent} from "../afterLogin/sections/graphics/graphics.component";
import {ProgressComponent} from "../afterLogin/sections/progress/progress.component";


import {NotFound404Component} from "../afterLogin/shared/errors/not-found404/not-found404.component";
import {AfterLoginComponent} from "../afterLogin/after-login.component";
import {RegistrerComponent} from "../login/registrer.component";




const  AppRouters : Routes = [
  {
    path:"",
    component:AfterLoginComponent,
    children:[
      {path:"dashboard", component:DashboardComponent},
      {path:"graphics",component:GraphicsComponent},
      {path:"progress",component:ProgressComponent},
      {path:"" ,redirectTo:'/dashboard', pathMatch:'full' }
    ]
  },
  {path:"login",component:LoginComponent},
  {path:"registrer",component:RegistrerComponent},
  {path:"**",component:NotFound404Component}
];

@NgModule({
  imports:[RouterModule.forRoot(AppRouters)],
  exports:[RouterModule]
})

export class AppRoutingModule{};


