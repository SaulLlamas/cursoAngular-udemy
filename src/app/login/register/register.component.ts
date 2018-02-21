import { Component, OnInit } from '@angular/core';
//Importación de FormGroup para trabajar con formularios
import {FormControl, FormGroup, Validators} from '@angular/forms';
//Importacion de Router para trabajar con rutas
import {Router} from '@angular/router';
//Importación de la libreria para sweetalerts
import swal from 'sweetalert';

//============================================================
//Importacion de servicios
//============================================================
import {UserService} from '../../services/user/user.service';

//Importacion del modelo usuario
import {User} from '../../models/user.model';


//Declaración  de la funcion init_plugins situada en costom.js
declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../loginregisterpage.css']
})
export class RegisterComponent implements OnInit {

  form : FormGroup;

  constructor(public _userService:UserService , public  router:Router) { }

  ngOnInit() {

    init_plugins();

    this.form = new FormGroup({
      /*
       * La función FormControl permite validar campos del formulario
       * - El primer parametro que recibe es el valor por defecto del campo del formulario
       * - El segundo parametro que recibe son las validaciones para ese campo utilizando Validators
       */
      name: new  FormControl(null, Validators.required),
      email: new  FormControl(null, [Validators.required,Validators.email]),
      password: new  FormControl(null, Validators.required),
      password2: new  FormControl(null, Validators.required),
      conditions: new  FormControl(false)
    },{
      validators:this.equals('password','password2')
    });


    this.form.setValue({
      name: "text1",
      email: "text1@text1.com",
      password:"paso",
      password2:"paso",
      conditions: true
    })


  }


  /**
   * @summary equals
   * @description comprueba dos campos del formulario tienen el mismo valor
   * @param field1
   * @param field2
   * @return {(group:FormGroup)=>{equals: boolean}}
   */
  equals(	field1:string , field2:string){



    return (group: FormGroup)=>{

      let value1 = group.controls[field1].value;
      let value2 = group.controls[field2].value;

      //Si los campos son iguales no se retorna nada
      if(value1 === value2){
        return null;
      }

      //Si los campos son iguales se retorna un error
      return{
        fieldsNotEquals:true
      };

    }

  }



  registerUser(){
      if(this.form.invalid){
        return
      }
      if(!this.form.value.conditions){
        swal('Importante','debes de aceptar los terminos para enviar el formulario','warning');
        return
      }
      console.log(this.form.value);

      //Si el formulario es correcto se llegara a este punto
      //Se creara un usuario con los datos del formulario
      let  newUser = new  User(
        this.form.value.name,
        this.form.value.email,
        this.form.value.password
      );

      this._userService.createUser(newUser)
        .subscribe(resp =>{
           this.router.navigate(['/login'])
        });
  }

}
