import { BrowserModule } from '@angular/platform-browser';
//Importo NgModule para declarar un modulo
import { NgModule } from '@angular/core';

//Importo appComponent que es el componente principal de la aplicación
import { AppComponent } from './app.component';

/*
====================================================================
IMPORTACIÓN DE COMPONENTES
====================================================================
*/
//Componente para el login del usuario
import { LoginComponent } from './login/login.component';

//Componente para la pagina de error 404
import { NotFound404Component } from './errors/not-found404/not-found404.component';

//Componente para el registro del usuario
import { RegistrerComponent } from './login/registrer.component';

import {AfterLoginComponent} from "./afterLogin/after-login.component";


//Componente para el registro del usuario
import {AppRoutingModule} from './routes/app-routes.module';

import {AfterLoginModule} from "./afterLogin/afterLogin.module";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFound404Component,
    RegistrerComponent,
    AfterLoginComponent
  ],
  //Importacion de modulos necesarios para que la aplicacion funcione
  imports: [
    BrowserModule,
    AppRoutingModule,
    AfterLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
