import { Injectable } from '@angular/core';

//Importacion del valor de la URL de la API del archivo de configuración
import {URL_API} from '../../config/config';

//Importacion de HttpClient y HttpHeaders para realizar peticiones http
import {HttpClient , HttpHeaders} from '@angular/common/http';

//Importacion de map
import 'rxjs/add/operator/map';


//Importación sel servicio User para la obtención del token
import {UserService} from '../user/user.service';
import {Doctor} from '../../models/doctor.model';

@Injectable()
export class DoctorService {

  token:string;

  constructor(public http:HttpClient , public _userservice:UserService ) {
    this.token = _userservice.token;
  }



  getDoctors(painateFrom:number = 0){

    let url = URL_API +'/doctor/?start='+painateFrom;

    return this.http.get(url)


  }

  getDoctor(id:string){
    let url = URL_API + '/doctor/'+id;

    return this.http.get(url)
      .map((response:any)=>{
        return response.doctor
      })

  }

  searchDoctors(criteria){

    let url = URL_API+"/search/collection/doctors/"+criteria;

    return this.http.get(url)
      .map((response:any)=>response.doctors);

  }


  deleteDoctor(id:string){

    let  url = URL_API+"/doctor/"+id;


    const httpOptions = {
      headers: new  HttpHeaders({
        'Authorization': this.token
      })
    };

    return this.http.delete(url,httpOptions);

  }


  saveDoctor(doctor:Doctor){

    let  url = URL_API+"/doctor";


    const httpOptions = {
      headers: new  HttpHeaders({
        'Authorization': this.token
      })
    };

    //Si el doctor tiene el campo _id el doctor ya existe por lo que entonces se hara una actualización de este
    if(doctor._id){

      //Se optiene el campo _id del doctor y se envia como parametro en la url
      url += '/'+ doctor._id;

      //Se hace la petición put para actualizar el usuario
      return this.http.put(url,doctor,httpOptions)
      .map((response:any)=>{
          return response.doctor_updated;
        })

    }else{

      return this.http.post(url,doctor,httpOptions)
        .map((response:any)=>{
          return response.doctor_saved;
        })

    }

  }


}
