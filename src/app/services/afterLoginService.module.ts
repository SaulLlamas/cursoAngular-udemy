import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importacion del servicio de configuracion de la apariencia de la aplicación
import {ThemeSettingsService} from './themeSettings/theme-settings.service';

//Importación de el servicio shared
import {SharedService} from './shared/shared.service';
import { SideBarService } from './shared/sidebar.service';
//Importacion de subida de archivos
import {UploadFileService} from './upload-file/upload-file.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers:[
    ThemeSettingsService,
    SideBarService ,
    UploadFileService
  ]
})
export class AfterLoginServiceModule { }
