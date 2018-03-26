import { Component, OnInit } from '@angular/core';
//Importación de router y ActivationEnd para acceder a la información necesaria de las rutas
import {ActivationEnd, Router} from '@angular/router';
//Importacion de  Tile permite obtener y modificar el titulo de la pagina
//Importacion de  Meta  y  MetaDefinition permiten obtener y modificar las etiquetas meta de la pagina
import {Meta, Title , MetaDefinition} from '@angular/platform-browser';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {

  currentSection: string ;

  constructor( private router:Router , public title:Title , public meta:Meta) {

    //Obtencion de los datos de la ruta con la función getDataRoute
    this.getDataRoute().subscribe(data => {
        //Current session obtendra el titulo de la ruta
         this.currentSection = data.title;
         //Cambio del titulo de la pagina utilizando el Objeto Title
         this.title.setTitle(this.currentSection);

        /**
         * Guarda la información para crear Meta Tags
         * @type {{name: string; content: string}}
         */
        let metatag : MetaDefinition = {
          name : "Section",
          content : this.currentSection
        }

        //Se añaden los metatag definidos
        this.meta.updateTag(metatag);

    });




  }

  /**
   * getDataRoute()=> Devuelve los datos de ruta obtenidos de un observador
   * @return {Observable}
   */
  getDataRoute(){
    //La propiedad events de router funciona como un obserbsdor
    return this.router.events
      //El obserbador obtendra solo los objetos ActivationEnd
      .filter(event => event instanceof ActivationEnd)
      //Se hace otro filtro para asegurarse de que no hay rutas hijas
      .filter((event:ActivationEnd) => event.snapshot.firstChild === null)
      //Se obtienen los datos de ruta
      .map((event:ActivationEnd) => event.snapshot.data)
  }


  ngOnInit() {
  }

}
