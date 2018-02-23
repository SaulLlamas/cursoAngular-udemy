import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

//Importacion del servicio del User
import {UserService} from '../user/user.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(public _userService : UserService , public router : Router){};

  canActivate(){

    if(this._userService.islogin()){
      console.log('Usuario logeado paso el  guard ');
      return true;
    }else{
      console.log('Usuario  no logeado  no paso el  guard');
      //En caso de que el usuario no este logeado de devolvera a la ruta del login
      this.router.navigate(['/login']);
      return false;
    }

  }
}
