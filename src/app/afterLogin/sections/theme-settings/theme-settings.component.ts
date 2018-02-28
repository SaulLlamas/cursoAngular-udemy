
import {Component, OnInit} from '@angular/core';

//Importacion del servicio de los ajustes de la cuenta de usuario
import {ThemeSettingsService} from '../../../services/themeSettings/theme-settings.service';


@Component({
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.component.html'
})
export class ThemeSettingsComponent implements OnInit {

  constructor(  public _themeSettingsService : ThemeSettingsService) {

  }

  ngOnInit() {
  }

  /**
   * función changeTheme() => Cambia el tema de colores de la aplicación por el recibido como parametro
   * @param theme  => tema al que se va a cambiar
   */
  changeTheme(theme : string, themeLink: any){


    this.applyCheck(themeLink);

    //Aplico el nuevo tema de colores utilizando el servicio de configuracion de cuentas de usuario
    this._themeSettingsService.aplytheme(theme);

  }

  /**
   * Aplica una clase working al link del tema selecionado
   * @param themeLink
   */
  applyCheck(themeLink:any){

    //Obtencion de todos los elementos del DOM que tienenla clase selector
    let themesLinks : any = document.getElementsByClassName('selector');

    //Recorrido de todos los elementos de la clase selector
    for (let theme of themesLinks){
      //Si algun elemento tiene la clase working se eliminara utilizando classList.remove
      theme.classList.remove('working');
    }


    //Se aññadira la clase working al elemento recibito como parametro
     themeLink.classList.add('working');

  }


  isWorking(theme: string){

    if(theme == this._themeSettingsService.settings.theme ){
      return true
    }
    else{
      return false
    }
  }

}
