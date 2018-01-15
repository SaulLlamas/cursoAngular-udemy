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
import {LoginComponent} from "./login/login.component";

import {RegistrerComponent} from "./login/registrer.component";





const  AppRoutes : Routes = [
  {path:"login",component:LoginComponent},
  {path:"registrer",component:RegistrerComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(AppRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule{};


