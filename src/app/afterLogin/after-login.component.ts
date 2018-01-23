/**
 * Este componente se cargara cuando el usuario se logee correctamente
 * @author Saul Llamas Parra
 */
import { Component, OnInit } from '@angular/core';

//Importacion del servicio de los ajustes de la cuenta de usuario
import {AccountSettingsService} from '../services/account-settings.service';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styles: []
})
export class AfterLoginComponent implements OnInit {

  /**
   * En constructor del usuario carga el servicio de los ajustes de la cuenta de usuario
   * @param accountSetings
   */
  constructor( public accountSetings : AccountSettingsService) { }

  ngOnInit() {
  }

}
