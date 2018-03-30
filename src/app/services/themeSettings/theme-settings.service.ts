/**
 * @summary ThemeSettigs Service
 * @description guarda la configuración para del tema
 * @author Saul Llamas Parra
 * @since 22-01-2018
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ThemeSettingsService {

  settings:ThemeSettings = {
    themeUrl:'./assets/css/colors/default.css',
    theme:'default'
  };

  constructor() {
    //Al llamar al servicio carga los ajustes del usuario
    this.loadSettings()
  }

  /**
   * saveSettings() => Guarda los ajustes del tema de color de la aplicación en el localStorage
   */
  saveSettings(){
  //  console.log('guardado en local Sotorage');
    localStorage.setItem('themeSettings',JSON.stringify(this.settings));
  }

  /**
   * loadSettings() => Carga los ajustes del tema de color  del localStorage y aplica el tema configurado
   */
  loadSettings(){

    //Si hay un tema guardado en el local Storage se aplica ese carga si no se dejara el tema por defecto
    if(localStorage.getItem('themeSettings')){
      //console.log(' cargado del local Sotorage');
      this.settings = JSON.parse(localStorage.getItem('themeSettings'))
    }else{
     // console.log('usando valores por defecto de tema');
    }

    //Se aplica el tema cargado en settigs
    this.aplytheme(this.settings.theme);

  }

  /**
   * Aplica el tema de colores recibido por parametro a la aplicación
   * @param theme
   */
  aplytheme(theme:string){

    /**
     * Variable urlhref => Guarda la url del nuevo estilo mediante un template string
     * @type {string}
     */
    let urlhref  = `./assets/css/colors/${theme}.css`;

    //Cargo la url del nuevo estilo cambiando el atributo href del elemento con el id appTheme
    document.getElementById('appTheme').setAttribute('href',urlhref);

    //Se guargan los nuevos valores del tema de color en el servicio de ajustes de usuario
    this.settings.themeUrl = urlhref;
    this.settings.theme = theme;
    this.saveSettings();

  }

}


interface ThemeSettings{
  themeUrl: string;
  theme:string;
}


