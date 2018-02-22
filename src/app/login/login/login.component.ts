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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../loginregisterpage.css']
})
export class LoginComponent implements OnInit {

  email:string;
  remenber_email: boolean = false;


  constructor(public router : Router , public _userService:UserService) { }

  /**
   * Funcion que se ejecuta al cargar el componente
   */
  ngOnInit() {
    //llamo a la funcion init_plugins para los plugins necesarios
    init_plugins();

    //Se mira en el local Storage si hay un email para recordar
    this.email=localStorage.getItem('reg_email')||"";

    //Si hay email para recordar remenber_email debe de estar activado
    if(this.email.length > 1){
      this.remenber_email = true;
    }

  }

  login(form:NgForm){

    //Si el formulario no es valido no hace nada
    if(form.invalid){
      return
    }

    console.log(form.value);

    //Si llega aqui el formulario es valido
    //Crea un objeto User con el email y password del formulario
    let user = new  User(null , form.value.email , form.value.password);

    this._userService.loginUser(user,form.value.remenber_email)
      .subscribe(response => {
        this.router.navigate(['/dashboard']);
      });



  }

}
