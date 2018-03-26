import { Component, OnInit } from '@angular/core';
//Importación del modelo Doctor
import {Doctor} from '../../../models/doctor.model';
//Importación del servicio Doctor
import {DoctorService} from '../../../services/doctor/doctor.service';


declare var swal:any;

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styles: []
})
export class DoctorsComponent implements OnInit {

  doctors:Doctor[]=[];

  paginate_from:number = 0;

  total_results:number = 0;

  loading:boolean = true;

  constructor(public  _doctorservice:DoctorService) { }

  ngOnInit() {
    this.loadDoctors();

  }


  changeFrom(value:number){

    /**
     * @var from
     * @description define la posicion del array de médicos desde la que se va empezar a mostrar en la vista
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
    this.loadDoctors();


  }


  loadDoctors(){

    this._doctorservice.getDoctors(this.paginate_from)
      .subscribe((response:any)=>{
        this.doctors = response.doctors;
        this.total_results = response.total_results;
        this.loading = false;
      }
    )

  }


  searchDoctors(criteria:string){

    if(criteria.length<=0){
      this.loadDoctors();
      return
    }

    this._doctorservice.searchDoctors(criteria)
      .subscribe((doctors_found:Doctor[])=>this.doctors=doctors_found);

  }

  deleteDoctor(doctor:Doctor){

    //Utilizando sweet alert se mostrara un cuadro de dialogo que preguntara al usuario si esta segoro que quiere borrar el doctor
    swal({
      title: "¿Estas seguro que deseas borrar  "+doctor.dctr_name+"?",
      text: "El doctor se borrara y no volveras a acceder a sus datos",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    //Si la respuesta del usuario es afirmativa se borrara el uruario si no se cancelara la operación
      .then((willDelete) => {
        if (willDelete){

          //Para borrar el usuario se llama a la funcion deleteUser() del servicio User
          this._doctorservice.deleteDoctor(doctor._id)
            .subscribe((response:any)=>{
              swal('Médico borrado correctamente',doctor.dctr_name,'success');
              //Se volveran a mostrar los médicos desde la posicion 0 del array
              this.paginate_from = 0;
              this.loadDoctors();
            });

        } else {
          swal("operación cancelada");
        }
      });

  }


}
