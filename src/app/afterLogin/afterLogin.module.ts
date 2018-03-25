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
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
//Importación del modulo @angular/common
import {CommonModule} from '@angular/common';
//Importación del modulo de graficas
import { ChartsModule } from 'ng2-charts';


//=========================================================================================
//IMPORTACIÓN DE COMPONENTES
//=========================================================================================
//Incrementador de la barra de progresso
import {ProgessIncrementComponent} from '../components/progess-increment/progess-increment.component';
//Componente de graficas
import {DoughnutGraphicsComponent} from '../components/doughnut-graphics/doughnut-graphics.component';


import {DashboardComponent} from "./sections/dashboard/dashboard.component";
import {GraphicsComponent} from "./sections/graphics/graphics.component";
import {ProgressComponent} from "./sections/progress/progress.component";
import {ThemeSettingsComponent} from './sections/theme-settings/theme-settings.component';
import { PromisesComponent } from './sections/promises/promises.component';
import { RxjsComponent } from './sections/rxjs/rxjs.component';
import {ModalUploadComponent} from '../components/modal-upload/modal-upload.component';
import { UserProfileComponent } from './sections/user-profile/user-profile.component';
import { UsersComponent } from './maintenance/users/users.component';
import { HospitalsComponent } from './maintenance/hospitals/hospitals.component';
import { DoctorsComponent } from './maintenance/doctors/doctors.component';
import { DoctorComponent } from './maintenance/doctors/doctor.component';
import { HospitalComponent } from './maintenance/hospitals/hospital.component';
import {GlobalSearchComponent} from './maintenance/global-search/global-search.component';

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
import {ServiceModule} from '../services/service.module';

@NgModule({
 declarations:[
   DashboardComponent,
   GraphicsComponent,
   ProgressComponent,
   ProgessIncrementComponent,
   DoughnutGraphicsComponent,
   ThemeSettingsComponent,
   PromisesComponent,
   RxjsComponent,
   UserProfileComponent,
   UsersComponent,
   HospitalsComponent,
   DoctorsComponent,
   DoctorComponent,
   HospitalComponent,
   GlobalSearchComponent
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
    ReactiveFormsModule,
    CommonModule,
    ChartsModule,
    ServiceModule,
    PipesModule
  ]
})

export class AfterLoginModule {}

