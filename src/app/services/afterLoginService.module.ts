import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importacion del servicio de configuracion de cuentas de usuario
import {AccountSettingsService} from './accountSettings/account-settings.service';

//Importación de el servicio shared
import {SharedService} from './shared/shared.service';
import { SideBarService } from './shared/sidebar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers:[AccountSettingsService, SideBarService]
})
export class AfterLoginServiceModule { }
