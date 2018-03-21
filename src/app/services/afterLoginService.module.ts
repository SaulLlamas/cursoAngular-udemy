import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Importacion del el modulo para los formularios
import {FormsModule} from '@angular/forms';

//Importacion del servicio de configuracion de la apariencia de la aplicación
import {ThemeSettingsService} from './themeSettings/theme-settings.service';

//Importación de el servicio shared
import {SharedService} from './shared/shared.service';
import { SideBarService } from './shared/sidebar.service';
//Importacion de subida de archivos
import {UploadFileService} from './upload-file/upload-file.service';
//Importación del servicio para subida de archivos mediante modal
import {ModalUploadService} from '../components/modal-upload/modal-upload.service';
//Importacion de el servicio hospital
import {HospitalService} from './hospital/hospital.service';
//Importación del servicio doctors
import {DoctorService} from './doctor/doctor.service';
//Importación del AdminGuard
import {AdminGuard} from './guards/admin.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
  ],
  providers:[
    HospitalService,
    DoctorService,
    ThemeSettingsService,
    SideBarService ,
    UploadFileService,
    ModalUploadService,
    AdminGuard
  ]
})
export class AfterLoginServiceModule { }
