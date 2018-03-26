import { Injectable } from '@angular/core';

//Importacion del valor de la URL de la API del archivo de configuración
import {URL_API} from '../../config/config';

//Importacion de HttpClient y HttpHeaders para realizar peticiones http
import {HttpClient , HttpHeaders} from '@angular/common/http';

//Importación de los operadores map y catch
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
//Importación del observable
import {Observable} from 'rxjs/Observable';

import swal from 'sweetalert';



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

      .catch(error =>{
        if(error.status === 500){
          swal(error.error.message,error.error.errors,'error');
        }

        return Observable.throw(error);
      })


  }

  getDoctor(id:string){
    let url = URL_API + '/doctor/'+id;

    return this.http.get(url)
      .map((response:any)=>{
        return response.doctor
      })
      .catch(error =>{

        if(error.status === 500){
          swal(error.error.message,error.error.errors,'error');
        }

        if(error.status === 404){
          swal(error.error.message,'No se encontro el médico','error');
        }

        return Observable.throw(error);
      })

  }

  searchDoctors(criteria){

    let url = URL_API+"/search/collection/doctors/"+criteria;

    return this.http.get(url)
      .map((response:any)=>response.doctors)
      .catch(error =>{

          if(error.status === 400){
            swal('ERROR al realizar la busqueda',error.error.message,'error');
          }

          return Observable.throw(error);
        })
  }


  deleteDoctor(id:string){

    let  url = URL_API+"/doctor/"+id;


    const httpOptions = {
      headers: new  HttpHeaders({
        'Authorization': this.token
      })
    };

    return this.http.delete(url,httpOptions)
    //En caso de que halla errores en la petición salta el catch
      .catch(error=>{

        if(error.status === 404){
          swal(error.error.message,'el doctor no existe ','error');
        }

        if(error.status === 500){
          swal(error.error.message,error.error.errors,'error');
        }

        return Observable.throw(error);

      });


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
      //En caso de que halla errores en la petición salta el catch
        .catch(error=>{

          if(error.status === 404){
            swal(error.error.message,'el doctor no existe ','error');
          }

          if(error.status === 500) {
            swal(error.error.message, error.error.errors, 'error');
          }

          if(error.status === 400){
            swal(error.error.message,' los datos enviados no son correctos','error');
          }


          return Observable.throw(error);

        });


    }else{

      return this.http.post(url,doctor,httpOptions)
        .map((response:any)=>{
          return response.doctor_saved;
        })
        .catch(error=>{

          if(error.status === 400){
            swal(error.error.message,error.error.errors,'error');
          }

          if(error.status === 500){
            swal(error.error.message,error.error.errors,'error');
          }

          return Observable.throw(error);

        });

    }

  }


}
