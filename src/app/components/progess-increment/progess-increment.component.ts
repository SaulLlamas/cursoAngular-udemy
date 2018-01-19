/**
 * @author Saul Llamas Parra
 * @since 18-01-2018
 */

//Importación de Component y OnInit para trabajar con los componentes de angular
//Importación deInput para recibir parametros de otros componentes
//Importación de Output para enviar informacion a otros componentes
//Importación de EvenEmitter permite que el componente emita informacion. Es necesario su uso en el output
//Importación de ViewChild para harcer referencia a elementos de la vista
import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-progess-increment',
  templateUrl: './progess-increment.component.html',
  styles: []
})
export class ProgessIncrementComponent implements OnInit {

  /**
   * Variable que guarda una referencia al elemento input editable del valor progress
   * @type {ElementRef)
   */
  @ViewChild('inputProgressValue') inputProgressValue : ElementRef;

  /**
   * Titulo que se le va a mostrar al usuario por defento es  " Incrementador "
   * @type {string}
   */
  @Input() title : string = "Incrementador";

  /**
   * Variable que establecera el valor del porcentage de la barra de progreso
   * Por defecto el valor es 50
   * @type {number}
   */
  @Input() progress : number = 50;

  /**
   * Contiene el valor que tendra finalmente la barra de progreso
   * finalvalue es la variable que sera emitida hacia otros componentes
   * @type {EventEmitter}
   */
  @Output() finalprogress: EventEmitter<number> = new EventEmitter();


  constructor() {

  }

  ngOnInit() {

  }





  /**
   * Se encarga de devolver el valor que tiene el progresso despues de modificar el infut
   * @param newvalue
   */
  onChange(newvalue : number){

    /**
     * Obtencion del elemento html donde se insertara el nuevo valor de la barra de progreso
     * @type {HTMLElement}
     */
    let inputProgressValue: any = document.getElementsByName('inputpv')[0];

    //En caso de que newvalue sea mayor que 100  el valor del progreso se quedara en 100
    if(newvalue > 100){
      this.progress = 100;

    }
      //En caso de que newvalue sea menor que 0  el valor del progreso se quedara 0
      else if(newvalue < 0){
        this.progress = 0;
      }

    else{
      this.progress = newvalue;
    }

    //Igualacion del input y progress
    this.inputProgressValue.nativeElement.value = this.progress

    //Emito el valor final de Progress utilizando la propiedad emit()
    this.finalprogress.emit(this.progress);



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

    }

    //Emito el valor final de Progress utilizando la propiedad emit()
    this.finalprogress.emit(this.progress);

  }

}
