import { Component, OnInit } from '@angular/core';
//Importación del servicio Hospital
import {HospitalService} from '../../../services/hospital/hospital.service';
//Importación del modelo Hospital
import {Hospital} from '../../../models/hospital.model';
//Importación de NgForms para trabajar con formularios
import {NgForm} from '@angular/forms';
//Importación del modelo Doctor
import {Doctor} from '../../../models/doctor.model';
//Importación del servicio Doctor
import {DoctorService} from '../../../services/doctor/doctor.service';
//Importación de Router para tratar rutas
//Importacion de Activated Router para aceder a los parametros de ruta
import {ActivatedRoute, Router} from '@angular/router';
import {ModalUploadService} from '../../../components/modal-upload/modal-upload.service';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: []
})
export class DoctorComponent implements OnInit {

  hospitals:Hospital[]=[];

  doctor:Doctor = new Doctor("","");

  hospital:Hospital = new Hospital("","","");

  message_success:string = 'Médico creado correctamente';

  title:string = "Creación de médico : ";

  constructor(
    public _hospitalservice : HospitalService,
    public _doctorservice : DoctorService ,
    public router:Router,
    public activatedRoute:ActivatedRoute,
    public _modaluploadservice : ModalUploadService,
    public _userservice :UserService
  )
  {

    //Con activateRoute se accede a los parametros de la url
    activatedRoute.params.subscribe((params:any)=>{

      let id = params['id'];

      if(id!="new"){
        this.loadDoctor(id)
      }

    })
  }

  ngOnInit() {
    //Se llama a la funcion para cargar los hospitales en el select
    this.loadHospitals();

    this._modaluploadservice.notification.subscribe((response:any)=> this.doctor = response.doctor_updated)

  }

  loadHospitals(){

    this._hospitalservice.loadAllHospitals()
      .subscribe((response:any)=>{
        this.hospitals = response.hospitals;

      });
  }


  loadDoctor(id:string){
    this._doctorservice.getDoctor(id)
      .subscribe((doctor_found)=>{
        this.doctor = doctor_found;
        this.doctor.dctr_hospital = doctor_found.dctr_hospital._id;
        this.changeHospital(this.doctor.dctr_hospital)
        this.title = "Actualización de médico : "
        this.message_success = "Médico actualizado correctamente"
      })
  }


  saveDoctor(form:NgForm){


    if(!form.valid){
      return
    }

    this._doctorservice.saveDoctor(this.doctor)
      .subscribe((doctor:Doctor)=>{
        this.doctor = doctor;
        swal(this.message_success,doctor.dctr_name,'success');
        this.router.navigate(['/doctor',doctor._id]);
      })

  }

  changeHospital(id:string) {

    if(id.length <= 0){
      return
    }

    this._hospitalservice.getHospital(id).subscribe((hospital:Hospital)=>this.hospital = hospital);


  }

  changeDoctorImage(){
    this._modaluploadservice.showModal('doctors',this.doctor._id,this._userservice.token);
  }

}
