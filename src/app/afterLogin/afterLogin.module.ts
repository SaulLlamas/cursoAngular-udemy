/**
 * @author Saul Llamas Parra
 * @since 14-01-2018
 *
 */
//=========================================================================================
//IMPORTACIÓN DE MODULOS DE ANGULAR
//=========================================================================================
//Importación de NgModule para declarar un modulo
import { NgModule } from '@angular/core';
//Importación del modulo para trabajar con los formularios
import {FormsModule} from '@angular/forms';
//Importación del modulo @angular/common
import {CommonModule} from '@angular/common';
//Importación del modulo de graficas
import { ChartsModule } from 'ng2-charts';


import {AfterLoginComponent} from "./after-login.component";
import {DashboardComponent} from "./sections/dashboard/dashboard.component";
import {GraphicsComponent} from "./sections/graphics/graphics.component";
import {ProgressComponent} from "./sections/progress/progress.component";
import {ThemeSettingsComponent} from './sections/theme-settings/theme-settings.component';

//=========================================================================================
//IMPORTACIÓN DE COMPONENTES
//=========================================================================================
//Incrementador de la barra de progresso
import {ProgessIncrementComponent} from '../components/progess-increment/progess-increment.component';
//Componente de graficas
import {DoughnutGraphicsComponent} from '../components/doughnut-graphics/doughnut-graphics.component';

import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { UserProfileComponent } from './sections/user-profile/user-profile.component';

//=========================================================================================
//IMPORTACIÓN DE MODULOS
//=========================================================================================
import {SharedModule} from './shared/shared.module';
import {AFTERLOGIN_ROUTES} from './afterLogin.routes';
//Modulo para las rutas
import {PipesModule} from '../pipes/pipes.module';

// ====================================================================
// IMPORTACIÓN DEl MODULO DE SERVICIOS
//=====================================================================
import {AfterLoginServiceModule} from '../services/afterLoginService.module';


@NgModule({
 declarations:[
   AfterLoginComponent,
   DashboardComponent,
   GraphicsComponent,
   ProgressComponent,
   ProgessIncrementComponent,
   DoughnutGraphicsComponent,
   ThemeSettingsComponent,
   PromisesComponent,
   RxjsComponent,
   UserProfileComponent
  ],
  exports:[
    DashboardComponent,
    GraphicsComponent,
    ProgressComponent
  ],
  imports:[
    SharedModule,
    AFTERLOGIN_ROUTES,
    FormsModule,
    CommonModule,
    ChartsModule,
    AfterLoginServiceModule,
    PipesModule
  ]
})

export class AfterLoginModule {}

