import { Component, OnInit } from '@angular/core';

//Importación de FormGroup para trabajar con formularios
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Hospital} from '../../../models/hospital.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalUploadService} from '../../../components/modal-upload/modal-upload.service';
import {UserService} from '../../../services/user/user.service';
import {HospitalService} from '../../../services/hospital/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styles: []
})
export class HospitalComponent implements OnInit {

  form :FormGroup;

  hospital:Hospital = new Hospital ('','','');

  title:string = "Creación de Hospital: ";

  message_success: string = 'Hospital creado correctamente';

  constructor(
    public  _hospitalservice:HospitalService,
    public router:Router,
    public activatedRoute:ActivatedRoute,
    public _modaluploadservice : ModalUploadService,
    public _userservice :UserService
  ) {

   activatedRoute.params.subscribe((params:any)=>{

     //Con activateRoute se accede a los parametros de la url
      let id = params['id'];

     if(id!="new"){
       this.loadHospital(id);
     }




   });


  }

  ngOnInit() {


    this._modaluploadservice.notification.subscribe((response:any)=> this.hospital = response.hospital_updated);

    this.form = new FormGroup({
      /*
       * Objeto FormControl
       * - El primer parametro que recibe es el valor por defecto del campo
       * - El segundo parametro que recibe son las validaciones del campo utilizando Validators
       */
      name:new FormControl(this.hospital.hosp_name,Validators.required),
      city:new FormControl(this.hospital.hosp_city,Validators.required),
      state:new FormControl(this.hospital.hosp_state,Validators.required),
    });


  }



  loadFormValues(){
    this.form.setValue({
      name:this.hospital.hosp_name,
      city:this.hospital.hosp_city,
      state:this.hospital.hosp_state
    })
  }


  loadHospital(id:string){
    this._hospitalservice.getHospital(id)
      .subscribe((hospital:Hospital)=>{
        this.hospital = hospital;
        this.loadFormValues();
        this.title = 'Actualización de Hospital :'
        this.message_success = 'Hospital actualizado correctamente';
      })
  }

  saveChanges(){

    let form_data = this.form.value;

    this.hospital.hosp_name = form_data.name;
    this.hospital.hosp_city = form_data.city;
    this.hospital.hosp_state = form_data.state;


    this._hospitalservice.saveHospital(this.hospital)
      .subscribe((hospital:Hospital)=>{
        this.hospital = hospital;
        swal(this.message_success,hospital.hosp_name,'success');
        this.loadFormValues();
        this.title = 'Actualización de Hospital :'
      });

  }

  changeHospitalImage(){
    this._modaluploadservice.showModal('hospitals',this.hospital._id,this._userservice.token);
  }

}
