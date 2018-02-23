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

//Importación de Router para la redireción de rutas
import {Router} from '@angular/router';

@Injectable()
export class UserService {

  token:string;
  user:User;

  constructor(public http:HttpClient , public router: Router) {
    this.loadStorage();
  }


  saveInStorage(id:string,token:string,user:User){
    localStorage.setItem('id',id);
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem('token',token);

    this.token=token;
    this.user= user;

  }

  /**
   * @summary loadStorage()
   * @description Carga la informacion del localStorage en las variables token y user
   */
  loadStorage(){
    if(localStorage.getItem('token') && localStorage.getItem('user')){
      this.token = localStorage.getItem('token');
      this.user =JSON.parse(localStorage.getItem('user'));
    }else{
      this.token = '';
      this.user = null;
    }
  }

  islogin(){
    return (this.token.length>1) ? true : false;
  }



  /**
   * @summary loginGoogleUser()
   * @description Hace una llamada post para comprobar el token de google
   * @param token
   * @return {Observable<Object>}
   */
  loginGoogleUser(token){

    //URL donde se va ha hacer la llamada
    let url = URL_API + "/login/google"

    return this.http.post(url,{token:token})
        .map((response:any)=>{

          //Si el token de google en correcto se guardan los datos en el LocalStorage
          this.saveInStorage(response.user._id,response.token,response.user);

          return true;

        });


  }

  /**
   * @summary loginUser()
   * @description Hace una llamada post para comprobar si el usuario y la contraseña son correctos, Ademas tambien tiene la posibilidad
   * de recordar el email
   * @param user => Usuario que se va a autentificar
   * @param remenber => Boolean para la opcion de recordar el email
   * @return {Observable<R>}
   */
  loginUser(user:User , remenber:boolean){

    console.log('remenber',remenber);

    //Si el parametro remenber esta habilitado se guardara en el local storage el email del usuario para recordarselo en un futuro
    if(remenber){
      localStorage.setItem('reg_email',user.user_mail);
    }else{
      localStorage.removeItem('reg_email')
    }

    //URL donde se va ha hacer la llamada
    let url = URL_API+"/login";

    return this.http.post(url,user)
      .map((response:any)=>{

        //Si el login es correcto se guardan los datos en el LocalStorage
        this.saveInStorage(response.user._id,response.token,response.user);

        return true;
      });

  }

  /**
   * @summary logoutUser()
   * @description cerrar sesion del usuario
   */
  logoutUser(){
    //Borrado del token y user
    this.token = "";
    this.user = null;
    //Borrado de las variables de sesión token y user guardadas en el localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    //Redireción al login 
    this.router.navigate(['/login'])
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
