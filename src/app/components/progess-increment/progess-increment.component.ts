/**
 * @author Saul Llamas Parra
 * @since 18-01-2018
 */

//Importación de Component y OnInit para trabajar con los componentes de angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progess-increment',
  templateUrl: './progess-increment.component.html',
  styles: []
})
export class ProgessIncrementComponent implements OnInit {

  /**
   * Variable que establecera el valor del porcentage de la barra de progreso
   * Por defecto el valor es 50
   * @type {number}
   */
  progress : number = 50;


  constructor() { }

  ngOnInit() {

  }

  /**
   * Funcion que cambiara el valor de la barra de progreso
   * @param valor que se le sumara al valor que tenga la barra de progreso
   */
  changeProgressValue( valor:number){

    /**
     * La variable newvalue guarda el nuevo valor de la barra de progreso
     * El nuevo valor de la barra de progresso se obtiene sumando el valor actual mas el numero recibido como parametro
     * @type {number}
     */
    let newvalue: number = this.progress + valor;

    //Si el valor de newvalue esta entre 0 y 100
    if( newvalue <= 100 && newvalue >= 0) {

      //El valor de la barra de progresso se iguala a newvalue
      this.progress = newvalue;

    }else{

      //En caso de que newvalue sea mayor que 100  el valor del progreso se quedara en 100
      if(newvalue > 100){
        this.progress = 100;
        //En caso de que newvalue sea menor que 0  el valor del progreso se quedara 0
      }
      if(newvalue < 0){
        this.progress = 0;
      }

    }

  }

}
