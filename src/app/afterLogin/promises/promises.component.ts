import { Component, OnInit } from '@angular/core';
import {promise} from 'selenium-webdriver';
import rejected = promise.rejected;

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

    this.countThree().then(
      messaje => console.log('Cuenta completada',messaje)
    ).catch(
      error => console.log('errpr en la promesa',error)
    )

  };


  ngOnInit() {
  }

  /**
   * count3() =>  Función que cuenta hasta 3 utlilizando un contador
   */
  countThree(): Promise<Boolean> {
    /**
     * Promesa
     * @type {Promise<T>}
     */
    return new Promise((resolve, rejected) => {

      //Declaración del contador e iniciación a 0
      let counter: number = 0;

      /**
       * El siguiente intervalo incrementara el contador cada segundo hasta que pasen 3 segundos
       */
      let interval = setInterval(() => {

        //Incrementación del contador
        counter += 1;
        console.log(counter);

        //Cuando el valor del contador sea 3 se resuelve la promesa
        if (counter === 3) {
          //La promesa se resuelve con un valor booleano
          resolve(true);
          //La funcion clearInterval hace que el intervalo se deje de ejecutar
          clearInterval(interval);
        }

      }, 1000);


    });

  }



}
