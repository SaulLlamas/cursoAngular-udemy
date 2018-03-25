/**
 * @summary servicio User
 * @description realiza llamadas POST , PUT , GET y DELETE al servidor para realizar diferentes operaciones sobre el usuario
 * @author Saul LLamas Parra
 * @since 20/02/2018
 */
import { Injectable } from '@angular/core';
//Importacion de httpClient para realizar llamadas http al servidor
import {HttpClient} from '@angular/common/http';
//Importación de httpHeaders para enviar cabeceras
import { HttpHeaders } from '@angular/common/http';
//Importacion del modelo user
import {User} from '../../models/user.model';
//Importacion del valor de la URL de la API del archivo de configuración
import {URL_API} from '../../config/config';

//Importación de los operadores map y catch
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
//Importación del observable
import {Observable} from 'rxjs/Observable';

//Importación de Router para la redireción de rutas
import {Router} from '@angular/router';
//Importación del servicio para subida de archivos
import {UploadFileService} from '../upload-file/upload-file.service';


@Injectable()
export class UserService {

  token:string;
  user:User;
  menu_options:any[]=[];

  constructor(public http:HttpClient , public router: Router  , public  _uploadFile : UploadFileService) {
    this.loadStorage();

  }

  /**
   * @summary renewtoken()
   * @description Renueva el token antes de que expire
   * @return {any}
   */

  renewtoken(){

    let url = URL_API + '/login/renewtoken';

    const httpOptions = {
      headers: new  HttpHeaders({
        'Authorization': this.token
      })
    };

    return this.http.get(url,httpOptions)
      .map((response:any)=>{
        this.token = response.token;
        localStorage.setItem('token',response.token);
        return true;
      })
      .catch(error=>{
        this.router.navigate(['/login']);
        swal('ERROR','error al renobar el token','error');
        return Observable.throw(error);
      })

  }


  saveInStorage(id:string,token:string,user:User,menu_options:any){
    localStorage.setItem('id',id);
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem('menu_options',JSON.stringify(menu_options));
    localStorage.setItem('token',token);

    this.menu_options = menu_options;
    this.token=token;
    this.user= user;

  }

  /**
   * @summary loadStorage()
   * @description Carga la informacion del localStorage en las variables token y user
   */
  loadStorage(){
    if(localStorage.getItem('token') && localStorage.getItem('user')&&localStorage.getItem('menu_options')){
      this.token = localStorage.getItem('token');
      this.user =JSON.parse(localStorage.getItem('user'));
      this.menu_options = JSON.parse(localStorage.getItem('menu_options'));
    }else{
      this.token = '';
      this.user = null;
      this.menu_options = [];
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

          console.log(response);

          //Si el token de google en correcto se guardan los datos en el LocalStorage
          this.saveInStorage(response.user._id,response.token,response.user,response.menu);

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
        this.saveInStorage(response.user._id,response.token,response.user,response.menu);

        return true;
      })
      //En caso de que halla errores en la petición salta el catch
      .catch(error=>{

          console.log(error.error.message);

          swal('ERROR de acceso',error.error.message,'error');

          return Observable.throw(error);

      })

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
    localStorage.removeItem('id');
    localStorage.removeItem('menu_options');
    //Redireción al login
    this.router.navigate(['/login'])
  }

  /**
   * @summary createUser()
   * @description Hace una llamada POST para crear un usuario
   * @param user => usuario nuevo
   * @return {OperatorFunction<T, R>}
   */
  createUser(new_user:User){

    let url = URL_API+"/user";

    return this.http.post(url,new_user)
      .map((response:any)=>{
          swal('usuario creado',new_user.user_mail,'success');
          return response.user_saved;
      })
      //En caso de que halla errores en la petición salta el catch
      .catch(error=>{

        if(error.status === 400){
          swal(error.error.message,'el correo electronico '+new_user.user_mail+' ya esta registrado','error');
        }

        if(error.status === 500){
          swal(error.error.message,error.error.errors,'error');
        }

        return Observable.throw(error);

      });

  }

  /**
   * @summary updateUser()
   * @description Hace una llamada PUT para actualizar un usuario
   * @param user => usuario para actualizar
   * @return {OperatorFunction<T, R>}
   */
  updateUser(update_user:User){

    const httpOptions = {
      headers: new  HttpHeaders({
        'Authorization': this.token
      })
    };

    let url = URL_API+"/user/"+update_user._id;

    return this.http.put(url,update_user,httpOptions)
      .map((response:any)=>{

        //Si el usuario que se va a actualizar es el mismo que el actual tambien se debe actualizar el local storage
        if (update_user._id === this.user._id) {
          //Para actualizar los datos en el objeto User del servicio y en el local storage se utiliza la funcion saveInStorage
          this.saveInStorage(this.user._id,this.token,update_user,this.menu_options);
        }

        //Muestro un mensaje al usuario
        swal('usuario actualizado',update_user.user_name,'success');

        return true
      })
      //En caso de que halla errores en la petición salta el catch
      .catch(error=>{

        if(error.status === 404){
          swal(error.error.message,'el usuario no existe ','error');
        }

        if(error.status === 500) {
          swal(error.error.message, error.error.errors, 'error');
        }

        if(error.status === 400){
          swal(error.error.message,' No puede haber dos usuarios con un mismo corrreo','error');
        }


        return Observable.throw(error);

      });
  }

  changeImage(file:File , id:string){


    this._uploadFile.uploadFile(file,'users',id,this.token)
      .then((response:any) =>{
        this.user.user_img = response.user_updated.user_img;
        this.saveInStorage(id, this.token, this.user,this.menu_options);
        swal('Imagen del usuario actualizada', this.user.user_name, 'success');
      })
      .catch((response:any)=>{
        console.log(response);
      })

  }

  /**
   * @summary loadUsers()
   * @description Carga los usuarios paginados
   * @param paginate_from => Posición del primer usuario que se va a mostrar el el array de usuarios
   * @return {Observable<Object>}
   */
  loadUsers(paginate_from : number = 0){
    let url = URL_API+"/user/?start="+paginate_from;
    return this.http.get(url)
      .catch(error =>{
        if(error.status === 500){
          swal(error.error.message,error.error.errors,'error');
        }

        return Observable.throw(error);
      })
  }

  /**
   * @summary searchUsers()
   * @description Busca usuarios basandose en un criterio de busqueda
   * @param criteria => criterio de busqueda
   * @return {Observable<R>}
   */
  searchUsers(criteria:string){

    let  url = URL_API+"/search/collection/users/"+criteria;

    return this.http.get(url)
      .map((response:any)=>response.users )
      .catch(error =>{
        if(error.status === 500){
          swal(error.error.message,error.error.errors,'error');
        }

        return Observable.throw(error);
      })
  }


  deleteUser(id : string){

    let  url = URL_API+"/user/"+id;

    const httpOptions = {
      headers: new  HttpHeaders({
        'Authorization': this.token
      })
    };

     return this.http.delete(url,httpOptions)
     //En caso de que halla errores en la petición salta el catch
       .catch(error=>{

         if(error.status === 404){
           swal(error.error.message,'el usuario no existe ','error');
         }

         if(error.status === 500){
           swal(error.error.message,error.error.errors,'error');
         }

         return Observable.throw(error);

       });


  }








}
