import { Component, OnInit , OnDestroy } from '@angular/core';

//Importación de Observable para trabajar con Observadores
import {Observable} from 'rxjs/Observable';
import {Subscription} from  'rxjs/Subscription'

//Importación del operador retry
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  subsciption : Subscription;

  constructor() {



    this.subsciption = this.rxjsObservable().subscribe(
      //Conjunto de ordenes que se ejecutan cuando el Obserbador detecte un cambio
      number => console.log('el valor del contador es: ',number),
      //Conjunto de ordenes que se ejecutaran cuando halla un error en el Observabor
      error => console.error('ERROR: ',error),
      //Conjunto de ordenes que se ejecutan cuando el Observador termine
      () => console.log('el observador  ha terminado')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subsciption.unsubscribe();
  }

  /**
   * rxjsObservable() => Devuelve un objeto observable que termina cuando un contador llega a 3
   * @return {Observable}
   */
  rxjsObservable():Observable<number>{
    //Creación de un objeto Observable que recibe como parametro una Arrow function
    return  new Observable(observer => {

      //Definición de un contador e inicialización a 0
      let counter:number = 0;

      //Creo una funcion que va ha ser ejecutada cada segundo
      let interval = setInterval(() => {

        //Incrementación del contador
        counter += 1;

        let exit  = {
          'value' : counter
        };

        //El observador trabajara sobre el contador
        observer.next(exit);

/*
        //si el valor del contador es 3 el observador a terminado
        if(counter === 3){
          //Con la funcion compleate() el observador deja de hacer su función
          observer.complete();
          //La funcion clearInterval hace que la funcion se deje de ejecutar cada segundo
          clearInterval(interval);
        }
        */

/*

        //si el valor del contador es 2 se manda un error al observador
        if(counter === 2){
          observer.error("Valor del contador es 2");
        }
*/

      }, 1000);

    })
      //La función retry() sobre un Observador hace que en caso error  reintente el numero de veces que reciba como parametro
      .retry(2)
      //La función map() sobre un Observador permite tratar la informacion de salida
      .map((res:any) =>(
        //En este caso solo interesaria que el Observador devolviera la propiedad value de su respuesta
        res.value
      ))
      //La función filter()  filtra la salida del Observador
      .filter((value)=>{
        //En este caso se filtrara la respuesta para obtener solo los numeros impares
        if((value % 2) === 1){
          return true
        }else{
          return false
        }
      });
  }

}
