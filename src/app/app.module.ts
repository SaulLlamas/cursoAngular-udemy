import { BrowserModule } from '@angular/platform-browser';

//Importación de NgModule para declarar un modulo
import { NgModule } from '@angular/core';




//====================================================================
//IMPORTACIÓN DE COMPONENTES
//====================================================================


//Importación de appComponent que es el componente principal de la aplicación
import { AppComponent } from './app.component';

//Componente para el login del usuario
import { LoginComponent } from './login/login/login.component';


//Componente para el registro del usuario
import { RegisterComponent } from './login/register/register.component';

//Componente al que se acede cuando el usuario se ha logeado correctamente
import { AfterLoginComponent } from './afterLogin/after-login.component';


// ====================================================================
// IMPORTACIÓN DE MODULOS
//=====================================================================


//Importacion del modulo de rutas
import {APP_ROUTES} from './app.routes';

//Importacion AfterLoginModule
import {AfterLoginModule} from './afterLogin/afterLogin.module';

//Importacion del modulo para trabajar con formularios
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//Importacion del modulo que permitira utilizar elementos  de angular como  por ejemplo el ngIf
import {CommonModule} from '@angular/common';
//Importacion del modulo que permitira realizar llamadas http
import {HttpClientModule} from '@angular/common/http';

//============================================================
//Importacion de servicios
//============================================================
import { ServiceModule } from './services/service.module';
import { SharedModule } from './afterLogin/shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AfterLoginComponent
  ],
  //Importacion de modulos necesarios para que la aplicacion funcione
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ServiceModule,
    SharedModule
  ],
  providers:[
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

