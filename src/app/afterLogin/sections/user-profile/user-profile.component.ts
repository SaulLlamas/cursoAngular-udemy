/**
 * @summary Controlador del perfil del usuario
 * @description Muestra informacion del usuario y permite modificarla
 * @author Saúl Llamas Parra
 * @since 28/02/18
 */
import { Component, OnInit } from '@angular/core';
//Importación del modelo User
import {User} from '../../../models/user.model';
//Importacion del servicio del User
import {UserService} from '../../../services/user/user.service';
import {ngWalkerFactoryUtils} from 'codelyzer/angular/ngWalkerFactoryUtils';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})

export class UserProfileComponent implements OnInit {

  /**
   * @var current_user
   * @type {User}
   * @description Guarda la información del usuario actual
   */
  current_user: User;

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

  constructor(public  _userservice: UserService) {
    //Para obtener la información del usuario actual se utiliza el servicio User
    this.current_user = this._userservice.user;
  }


  ngOnInit(){}

  /**
   * @summary save()
   * @description Guarda los cambios hechos en el formulario en la base de datos
   * @param form_data
   */
  save(form_data:any) {

    console.log('datos formulario',form_data);

    this.current_user.user_name = form_data.name;

    if(!this.current_user.user_google_auth){
      this.current_user.user_mail = form_data.mail;
    }


    this._userservice.updateUser(this.current_user)
      .subscribe((response)=>{
        console.log(response);
      })

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

  updateImage(){

    console.log(this.new_image)
    console.log(this.current_user._id)

    this._userservice.changeImage(this.new_image,this.current_user._id)

  }

}
