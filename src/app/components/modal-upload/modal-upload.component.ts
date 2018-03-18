import { Component, OnInit } from '@angular/core';
//Importacion de servicio de subida de archivos
import {UploadFileService} from '../../services/upload-file/upload-file.service';
//Importacion de servicio de subida de archivos para modales
import {ModalUploadService} from './modal-upload.service';
//Importacion del servicio usuario
import {UserService} from '../../services/user/user.service';


@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {


  /**
   * @var newimage
   * @type {File}
   * @description guarda el archivo subido como nueva imagen para el perfil
   */
  new_image:File;

  /**
   * @var selected_image
   * @type {File}
   * @description comtiene la imagen selecionada
   */
  selected_image:File;


  constructor(public _uploadFileService:UploadFileService , public _modalUploadService:ModalUploadService , public _userService:UserService) {

  }

  ngOnInit() {
  }


  closeModal(){
    this.selected_image = null;
    this.new_image = null;
    this._modalUploadService.hideModal();
  }

  selectImage(file_upload : File){

    if(!file_upload){
      this.new_image = null;
      return
    }

    //Comprobacion de que el archivo selecionado es una imagen y si no lo es se muestra un mensage de error
    if(file_upload.type.indexOf('image')) {
      swal('no se a podido realizar la operación', 'el archivo selecionado no es una imagen', 'error')
      this.new_image = null;
      return
    }

    this.new_image = file_upload;

    /**
     * @var reader
     * @description Creación de un objeto reader para leer el archivo subido
     * @type {FileReader}
     */
    let reader = new FileReader();

    /**
     * @var url_image_selected
     * @description Obtencion de la url de la imagen selecionada
     */
    let url_image_selected = reader.readAsDataURL(file_upload);


    reader.onloadend = ()=>{
      //El valor de reader.result es la imagen selecionada en base64
      this.selected_image = reader.result;
    };


  }

  /**
   * @summary uploadFile()
   * @description Sube el archivo selecionado
   */
  uploadFile(){
    this._uploadFileService.uploadFile(this.new_image, this._modalUploadService.element , this._modalUploadService.id , this._userService.token)
      .then(response =>{
        console.log(response);
        this._modalUploadService.notification.emit(response);
        this.closeModal();
      })
      .catch(error => {
        console.log('error al subir la imagen',error)
      })
  }



}
