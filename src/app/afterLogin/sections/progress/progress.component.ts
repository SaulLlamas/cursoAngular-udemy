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
   * Variable que establecera el valor del porcentage de la barra de progreso
   * Por defecto el valor es 50
   * @type {number}
   */
  progress : number = 50;

  constructor() { }

  ngOnInit() {


  }





}
