/**
 * @author Saul Llamas Parra
 * @since 17-01-2018
 */
//Importación de Component y OnInit para trabajar con los componentes de angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  /**
   * Variable que establecera el valor del porcentage de la barra de progreso 1
   * @type {number}
   */
  progress1 : number = 20;

  /**
   * Variable que establecera el valor del porcentage de la barra de progreso 2
   * @type {number}
   */
  progress2 : number = 30;

  constructor() { }

  ngOnInit() {


  }


  changevalue(progressvalue:number){
    console.log('Output => ' + progressvalue)
  }


}
