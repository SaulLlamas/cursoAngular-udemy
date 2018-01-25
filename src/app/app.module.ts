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
import { RegistrerComponent } from './login/Registrer/registrer.component';


// ====================================================================
// IMPORTACIÓN DE MODULOS
//=====================================================================


//Importacion del modulo de rutas
import {APP_ROUTES} from './app.routes';

//Importacion AfterLoginModule
import {AfterLoginModule} from './afterLogin/afterLogin.module';

//Importacion del modulo para trabajar con formularios
import {FormsModule} from '@angular/forms';
//Importacion del modulo que permitira utilizar elementos  de angular como  por ejemplo el ngIf
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrerComponent
  ],
  //Importacion de modulos necesarios para que la aplicacion funcione
  imports: [
    BrowserModule,
    APP_ROUTES,
    AfterLoginModule,
    FormsModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

