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
import { AccountSettingsComponent } from './sections/account-settings/account-settings.component';

//=========================================================================================
//IMPORTACIÓN DE COMPONENTES
//=========================================================================================
//Incrementador de la barra de progresso
import {ProgessIncrementComponent} from '../components/progess-increment/progess-increment.component';
//Componente de graficas
import {DoughnutGraphicsComponent} from '../components/doughnut-graphics/doughnut-graphics.component';

//=========================================================================================
//IMPORTACIÓN DE MODULOS
//=========================================================================================
import {SharedModule} from './shared/shared.module';
import {AFTERLOGIN_ROUTES} from './afterLogin.routes';

// ====================================================================
// IMPORTACIÓN DE SERVICIOS
//=====================================================================
import {AfterLoginServiceModule} from '../services/afterLoginService.module';
import { PromisesComponent } from './promises/promises.component';


@NgModule({
 declarations:[
   AfterLoginComponent,
   DashboardComponent,
   GraphicsComponent,
   ProgressComponent,
   ProgessIncrementComponent,
   DoughnutGraphicsComponent,
   AccountSettingsComponent,
   PromisesComponent
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
    AfterLoginServiceModule
  ]
})

export class AfterLoginModule {}

