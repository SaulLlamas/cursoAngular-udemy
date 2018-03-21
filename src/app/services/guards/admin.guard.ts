import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from '../user/user.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(public _userservice : UserService , public  router:Router){

  }

  canActivate(){

    //El usuario solo podra acceder a la ruta si es administrador
    if(this._userservice.user.user_role === "admin"){
      return true
    }else{
      this.router.navigate(['/dashboard'])
      return false
    }

  }
}
