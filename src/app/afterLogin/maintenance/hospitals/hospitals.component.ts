import { Component, OnInit } from '@angular/core';
import {HospitalService} from '../../../services/hospital/hospital.service';
//Importación del modelo Hospital
import {Hospital} from '../../../models/hospital.model';

declare var swal:any;

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styles: []
})
export class HospitalsComponent implements OnInit {

  hospitals:Hospital[]=[];

  paginate_from:number=0;

  total_results:number=0;

  loading:boolean=true;


  constructor(public _hospitalservice : HospitalService ) { }

  ngOnInit() {
    this.loadHospitals();

  }



  changeFrom(value:number){

    /**
     * @var from
     * @description define la posicion del array de hospitales desde la que se va empezar a mostrar en la vista
     * @type {number}
     */
    let from:number = this.paginate_from + value;

    //El valor de la variable from no podra ser mayor al numero de hospitales
    if(from >= this.total_results){
      return
    }

    //El valor de la variable from no podra ser menor que cero
    if(from < 0 ){
      return
    }

    this.paginate_from = from;
    this.loadHospitals();


  }


  loadHospitals(){
    this._hospitalservice.loadHospitals(this.paginate_from)
      .subscribe((response:any)=>{
        this.hospitals = response.hospitals;
        this.total_results = response.total_results;
        this.loading = false;
        console.log( response.hospitals);
      })


  }


  searchHospitals(criteria:string){

    //Si no hay criterio no hay busqueda
    if(criteria.length <= 0){
      this.loadHospitals();
      return;
    }

    this.loading = true;

    this._hospitalservice.searchHospitals(criteria)
      .subscribe((response:any)=>{
        this.hospitals =  response;
        this.total_results = this.hospitals.length;
        this.loading = false;
      })
  }


  /**
   * @summary deleteHospital()
   * @description Borra el hospital que recibe por parametro
   * @param hospital
   */
  deleteHospital(hospital:Hospital){


    //Utilizando sweet alert se mostrara un cuadro de dialogo que preguntara al usuario si esta segoro que quiere borrar el hospital
    swal({
      title: "¿Estas seguro que deseas borrar  "+hospital.hosp_name+"?",
      text: "El hospital se borrara y no volveras a acceder a sus datos",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    //Si la respuesta del usuario es afirmativa se borrara el uruario si no se cancelara la operación
      .then((willDelete) => {
        if (willDelete){

          //Para borrar el usuario se llama a la funcion deleteUser() del servicio User
          this._hospitalservice.deleteHospital(hospital._id)
            .subscribe((response:any)=>{
              swal('Hospital borrado correctamente',hospital.hosp_name,'success');
              //Se volveran a mostrar los hospitales desde la posicion 0 del array
              this.paginate_from = 0;
              this.loadHospitals();
            });

        } else {
          swal("operación cancelada");
        }
      });

  }



}
