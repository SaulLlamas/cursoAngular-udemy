import { Component, OnInit } from '@angular/core';

//Declaración  de la funcion init_plugins situada en costom.js
declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../loginregisterpage.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("componente","RegisterComponent");
    init_plugins();
  }

}
