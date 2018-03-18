import { Pipe, PipeTransform } from '@angular/core';
//Importacion del valor  la URL de la API en el archivo de configuración
import {URL_API} from '../config/config';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string ='no-img', element:string = 'user'): any {


    let url_api = URL_API+'/image';

    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch(element){
      //Si el elemento del que se quiere obtener la imagen es un usuario
      case 'user':
        url_api += '/users/'+img;
        break;
      //Si el elemento del que se quiere obtener la imagen es un doctor
      case 'doctor':
        url_api += '/doctors/'+img;
        break;
      ////Si el elemento del que se quiere obtener la imagen es un hospital
      case 'hospital':
        url_api += '/hospitals/'+img;
        break;
      default:
        console.log("El elemento "+element+" no es valido");
        url_api += "/no-img";
    }

    return url_api

  }

}
