/**
 * Este componente se cargara cuando el usuario se logee correctamente
 * @author Saul Llamas Parra
 */
import { Component, OnInit } from '@angular/core';

//Importacion del servicio de los ajustes de la cuenta de usuario
import {ThemeSettingsService} from '../services/themeSettings/theme-settings.service';

//Declaración  de la funcion init_plugins situada en costom.js
declare function init_plugins();

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
  constructor( public accountSetings : ThemeSettingsService) { }

  /**
   * Funcion que se ejecuta al cargar el componente
   */
  ngOnInit() {
    init_plugins()
  }

}
