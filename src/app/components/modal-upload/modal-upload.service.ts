
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ModalUploadService {


  public element:string;
  public id: string;
  public token:string;

  public hide: string = "hide";

  public notification = new EventEmitter<any>();

  constructor() {

  }

  /**
   * @summary hideModal()
   * @description occulta la ventana modal de subida de archivos
   */
  hideModal(){
    this.hide = 'hide';
    this.element = null;
    this.id = null;
    this.token = null
  }


  /**
   * @summary showModal()
   * @description Muestra la ventana modal de subida de archivos
   * @param element => Collecion de la base de datos donde se va a subir el archivo
   * @param id => Id del documenco al que va a pertenecer el archivo
   * @param token => token de autentificacion del usuario
   */
  showModal(element:string , id:string , token:string){
    this.hide = '';
    this.element = element;
    this.id = id;
    this.token = token;

    console.log('modalUploadService.ShowModal()','element => '+this.element+' id => '+this.id+' token =>'+this.token);

  }

}
