import { Injectable } from '@angular/core';
//Importacion de httpClient para realizar llamadas http al servidor
import {HttpClient} from '@angular/common/http';
//Importacion del modelo user
import {User} from '../../models/user.model';
//Importacion del archivo de configuración para obtener la URL de la API
import {URL_API} from '../../config/config';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(public http:HttpClient) {
    console.log('servicio de User funcionando')
  }

  createUser(user:User){

    let url = URL_API+"/user";

    return this.http.post(url,user)
      .map((response:any)=>{
          swal('usuario creado',user.user_mail,'success')
          return response.user_saved;
      })

  }

}
