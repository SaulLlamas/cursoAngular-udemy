/**
 * Archivo donde se encuentra el modulo de rutas principal de configuración de rutas
 * @author Saul Llamas Parra
 * @since 13-01-2018
 */

//Importo Router y RouterModule de @angular/router para trabajar con rutas
import  {RouterModule , Routes} from '@angular/router';


/*
===========================================================================================
Importación de los componentes a los que van a referirise las rutas
===========================================================================================
 */
import {LoginComponent} from "./login/login/login.component";

import {RegistrerComponent} from "./login/Registrer/registrer.component";
import {NotFound404Component} from './errors/not-found404/not-found404.component';





const  AppRoutes : Routes = [
  {path:"login",component:LoginComponent},
  {path:"registrer",component:RegistrerComponent},
  {path:"**",component:NotFound404Component}
];



export const APP_ROUTES = RouterModule.forRoot( AppRoutes );


