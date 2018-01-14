import { BrowserModule } from '@angular/platform-browser';
//Importo NgModule para declarar un modulo
import { NgModule } from '@angular/core';

//Importo appComponent que es el componente principal de la aplicación
import { AppComponent } from './app.component';

//Importo el resto de los componentes de la aplicación
//Componente para la pagina de login del usuario
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './afterLogin/sections/dashboard/dashboard.component';
import { GraphicsComponent } from './afterLogin/sections/graphics/graphics.component';
import { ProgressComponent } from './afterLogin/sections/progress/progress.component';
import {HeaderBarComponent} from './afterLogin/shared/bars/header-bar/header-bar.component';
import { SideBarComponent } from './afterLogin/shared/bars/side-bar/side-bar.component';
import { BreadcrumsComponent } from './afterLogin/shared/breadcrums/breadcrums.component';


import { NotFound404Component } from './afterLogin/shared/errors/not-found404/not-found404.component';

//Importo el modulo de rutas
import {AppRoutingModule} from './routes/app-routes.module';
import { AfterLoginComponent } from './afterLogin/after-login.component';
import { RegistrerComponent } from './login/registrer.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GraphicsComponent,
    ProgressComponent,
    HeaderBarComponent,
    SideBarComponent,
    BreadcrumsComponent,
    NotFound404Component,
    AfterLoginComponent,
    RegistrerComponent
  ],
  //Importacion de modulos necesarios para que la aplicacion funcione
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
