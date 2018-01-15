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

import {HeaderBarComponent} from "./shared/bars/header-bar/header-bar.component";
import {SideBarComponent} from "./shared/bars/side-bar/side-bar.component";
import {BreadcrumsComponent} from "./shared/breadcrums/breadcrums.component";

@NgModule({
 declarations:[
   DashboardComponent,
   GraphicsComponent,
   ProgressComponent,
   HeaderBarComponent,
   SideBarComponent,
   BreadcrumsComponent
 ],
  exports:[
    DashboardComponent,
    GraphicsComponent,
    ProgressComponent,
    HeaderBarComponent,
    SideBarComponent,
    BreadcrumsComponent
  ]
})

export class AfterLoginModule {};

