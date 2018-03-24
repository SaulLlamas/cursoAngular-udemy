import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Importacion del el modulo para los formularios
import {FormsModule} from '@angular/forms';
//Importación del servicio para subida de archivos mediante modal
import {ModalUploadService} from '../components/modal-upload/modal-upload.service';

import{
  AdminGuard,
  LoginGuard,
  HospitalService,
  DoctorService,
  UserService,
  UploadFileService,
  ThemeSettingsService,
  SideBarService,
  SharedService
}from './service.index';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
  ],
  providers:[
    AdminGuard,
    LoginGuard,
    HospitalService,
    DoctorService,
    UserService,
    UploadFileService,
    ThemeSettingsService,
    SideBarService,
    SharedService,
    ModalUploadService
  ]
})
export class ServiceModule { }
