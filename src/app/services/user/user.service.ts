/**
 * @summary servicio User
 * @description realiza llamadas POST , PUT , GET y DELETE al servidor para realizar diferentes operaciones sobre el usuario
 * @author Saul LLamas Parra
 * @since 20/02/2018
 */
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

  loginUser(user:User , remenber:boolean){

    console.log('remenber',remenber);

    //Si el parametro remenber esta habilitado se guardara en el local storage el email del usuario para recordarselo en un futuro
    if(remenber){
      localStorage.setItem('reg_email',user.user_mail);
    }else{
      localStorage.removeItem('reg_email')
    }

    let url = URL_API+"/login";

    return this.http.post(url,user)
      .map((response:any)=>{
        localStorage.setItem('id',response.user._id);
        localStorage.setItem('user',JSON.stringify(response.user));
        localStorage.setItem('token',response.token);
        return true;
      });

  }

  /**
   * Hace una llamada POST para crear un usuario
   * @param user
   * @return {OperatorFunction<T, R>}
   */
  createUser(user:User){

    let url = URL_API+"/user";

    return this.http.post(url,user)
      .map((response:any)=>{
          swal('usuario creado',user.user_mail,'success');
          return response.user_saved;
      });

  }

}
