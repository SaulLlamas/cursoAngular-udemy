/**
 * @author Saul Llamas Parra
 * @since 14-01-2018
 *
 */

/*import { BrowserModule } from '@angular/platform-browser';*/
//Importo NgModule para declarar un modulo
import { NgModule } from '@angular/core';


import {AfterLoginComponent} from "./after-login.component";

import {DashboardComponent} from "./sections/dashboard/dashboard.component";
import {GraphicsComponent} from "./sections/graphics/graphics.component";
import {ProgressComponent} from "./sections/progress/progress.component";

import {SharedModule} from './shared/shared.module';
import {AFTERLOGIN_ROUTES} from './afterLogin.routes';

@NgModule({
 declarations:[
   AfterLoginComponent,
   DashboardComponent,
   GraphicsComponent,
   ProgressComponent
 ],
  exports:[
    DashboardComponent,
    GraphicsComponent,
    ProgressComponent
  ],
  imports:[
    SharedModule,
    AFTERLOGIN_ROUTES
  ]
})

export class AfterLoginModule {}

