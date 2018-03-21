import { Component, OnInit } from '@angular/core';
//Importacion de Router de @angularrouter para trabajar con rutas
import {Router} from '@angular/router';
//Importacion de NgForm
import {NgForm} from '@angular/forms';
//Importacion del servicio de usuarios
import {UserService} from '../../services/user/user.service';
//Importación del modelo User
import {User} from '../../models/user.model';
//Declaración  de la funcion init_plugins situada en costom.js
declare function init_plugins();
//Declaracion de una constante de la api de google
declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../loginregisterpage.css']
})
export class LoginComponent implements OnInit {

  //Objeto que se va a recibir con información del usuario de google
  auth2 : any;

  email:string;
  remenber_email: boolean = false;


  constructor(public router : Router , public _userService:UserService) { }

  /**
   * Funcion que se ejecuta al cargar el componente
   */
  ngOnInit() {
    //llamo a la función init_plugins para los plugins necesarios
    init_plugins();

    //Se mira en el local Storage si hay un email para recordar
    this.email=localStorage.getItem('reg_email')||"";

    //Si hay email para recordar remenber_email debe de estar activado
    if(this.email.length > 1){
      this.remenber_email = true;
    }

    //Llamada a googleAuthInit() para realizar la autentificación de los usuarios de google
    this.googleAuthInit();


  }


//============================================================
//Autentificacion con google
//============================================================

  googleAuthInit(){
    gapi.load('auth2',()=>{
      this.auth2 = gapi.auth2.init({
        client_id: '853227325606-pjj3l46ktkc3ogj08kfi9gnceq371gvg.apps.googleusercontent.com',
        cookiepolicy:'single_host_origin',
        scope: 'profile'
      });

      this.attachSingIn(document.getElementById('btnGoogle'))

    });

  }


  attachSingIn(element){
    this.auth2.attachClickHandler(element,{},(googleUser)=>{
      let token = googleUser.getAuthResponse().id_token;

      this._userService.loginGoogleUser(token)
        .subscribe(()=>{
          window.location.href = '#/dashboard'
        });

    })
  }


//============================================================
//Autentificacion normal
//============================================================

  login(form:NgForm){

    //Si el formulario no es valido no hace nada
    if(form.invalid){
      return
    }

    console.log(form.value);

    //Si llega aqui el formulario es valido
    //Creación de  un objeto User con el email y password del formulario
    let user = new  User(null , form.value.email , form.value.password);

    //Utilizacion del servicio User para hacer el login al usuario
    this._userService.loginUser(user,form.value.remenber_email)
      .subscribe(response => {
        this.router.navigate(['/dashboard']);
      });



  }

}
