/**
 * @author Saul Llamas Parra
 * @since 15-01-2018
 */


//Importo NgModule para declarar un modulo
import { NgModule } from '@angular/core';


import {HeaderBarComponent} from './bars/header-bar/header-bar.component';
import {SideBarComponent} from './bars/side-bar/side-bar.component';
import {BreadcrumsComponent} from './breadcrums/breadcrums.component';



@NgModule({
  declarations:[
    HeaderBarComponent,
    SideBarComponent,
    BreadcrumsComponent
  ],
  exports:[
    HeaderBarComponent,
    SideBarComponent,
    BreadcrumsComponent
  ]
})

export class SharedModule {}


