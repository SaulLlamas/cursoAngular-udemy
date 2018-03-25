import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
//Implementación del servicio User para obtener el token
import {UserService} from '../user/user.service';

@Injectable()
export class VerifyTokenGuard implements CanActivate {

  constructor(public _userservice:UserService , public  router:Router){

  }

  canActivate(): Promise<boolean> | boolean{

    console.log('Guard','verify-token');

    //Obtención del token del servicio User
    let token = this._userservice.token;

    //Obtención del payload del token
    let payoad = JSON.parse(atob(token.split('.')[1]));

    let expired = this.isexpired(payoad.exp)

    //Si el token ha expirado se debe volver al login
    if(expired){
      this.router.navigate(['/login']);
      return false;
    }

    console.log('payload_token',payoad);


    this.mustrenew(payoad.exp)

    return true;
  }


  mustrenew(exp:number):Promise<boolean>{

    return new Promise((resolve,reject)=>{

      //Se para la fecha de expiración del token a milisegundos
      let tokenexpird = new Date(exp*1000)
      //Se obriene la fecha actual
      let now = new Date();

      //Se añade 4 horas a la fecha actual
      now.setTime(now.getTime()+ (48*60*60*1000));

      if(tokenexpird.getTime() > now.getTime()){
        resolve(true);
      }else{
        this._userservice.renewtoken()
          .subscribe(()=>{
            console.log('token renovabo')
            resolve(true);
          },()=>{
            this.router.navigate(['/login']);
            reject(false);
          })
      }

    })

  }


  /**
   * @summary isexpired()
   * @description Comprueba si el token a expirado
   * @param exp
   * @return {boolean}
   */
  isexpired(exp:number){

    //Obtenión de la fecha actual en segundos
    let now = new  Date().getTime()/1000;

    if(exp < now){
      return true;
    }else{
      return false;
    }

  }


}
