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
import {RegisterComponent} from "./login/register/register.component";
import {NotFound404Component} from './errors/not-found404/not-found404.component';
//Importación del componente que se cargara cuando el usuario se halla logeado
import { AfterLoginComponent } from './afterLogin/after-login.component';
import { LoginGuard } from './services/service.index';





const  AppRoutes : Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {
    path:"",
    component:AfterLoginComponent,
    canActivate:[LoginGuard],
    //Las rutas que estan en loadChildren se cargaran dinamicamente
    loadChildren:'./afterLogin/afterLogin.module#AfterLoginModule'

  },
  {path:"**",component:NotFound404Component}
];



export const APP_ROUTES = RouterModule.forRoot( AppRoutes,{useHash:true} );


