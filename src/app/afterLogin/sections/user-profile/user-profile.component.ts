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

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})

export class UserProfileComponent implements OnInit {

  /**
   * @summary current_user
   * @description Guarda la información del usuario actual obtenida del servicio User
   */
  update_user: User;

  constructor(public  _userservice: UserService) {
    this.update_user = this._userservice.user;
  }


  ngOnInit(){}

  /**
   * @summary save()
   * @description Guarda los cambios hechos en el formulario en la base de datos
   * @param form_data
   */
  save(form_data:any) {

    console.log('datos formulario',form_data);

    this.update_user.user_name = form_data.name;

    if(!this.update_user.user_google_auth){
      this.update_user.user_mail = form_data.mail;
    }


    this._userservice.updateUser(this.update_user)
      .subscribe((response)=>{
        console.log(response);
      })

  }
}
