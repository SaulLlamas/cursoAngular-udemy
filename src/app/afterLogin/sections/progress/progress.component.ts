import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

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
     * La variable newvalue guarda la  suma del valor que tiene la barra de progreso con el valor obtenido por parametro
     * @type {number}
     */
    let newvalue: number = this.progress + valor;

    //Si el valor de newvalue esta entre 0 y 100
    if( newvalue <= 100 && newvalue >= 0) {

      //El valor de la barra de progresso se iguala a newvalue
      this.progress = newvalue;
      console.log("Estoy en el if => progress = "+ this.progress)

    }

  }



}
