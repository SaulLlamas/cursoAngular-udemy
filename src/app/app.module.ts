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


//Componente para el registro del usuario
import { RegistrerComponent } from './login/registrer.component';


//Importo componente para incrementar barras de progresso
import { ProgessIncrementComponent } from './components/progess-increment/progess-increment.component';

/*
 ====================================================================
 IMPORTACIÓN DE MODULOS
 ====================================================================
 */

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
