import { Component, OnInit } from '@angular/core';
//Importacion de Router de @angularrouter para trabajar con rutas
import {Router} from '@angular/router';
//Declaración  de la funcion init_plugins situada en costom.js
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public router : Router) { }

  /**
   * Funcion que se ejecuta al cargar el componente
   */
  ngOnInit() {
    //llamo a la funcion init_plugins para los plugins necesarios
    init_plugins();
  }

  enter(){

    console.log('entrando.........');

    this.router.navigate(['/dashboard']);

  }

}
