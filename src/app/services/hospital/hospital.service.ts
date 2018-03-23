
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

//Importacion del modelo Hospital
import {Hospital} from '../../models/hospital.model';
//Importación sel servicio User para la obtención del token
import {UserService} from '../user/user.service';

@Injectable()
export class HospitalService {

  token:string;

  constructor(public http:HttpClient,public _userservice:UserService) {
    this.token = _userservice.token;
  }

  /**
   * @summary loadAllHospitals()
   * @description Carga todos los hospitales sin paginar
   * @return {Observable<Object>}
   */
  loadAllHospitals(){
    /**
     * @var url
     * @description url a la que se va a hacer la petición get
     * @type {string}
     */
    let url = URL_API+"/hospital/all";

    return this.http.get(url);
  }



  /**
   * @summary loadHospitals()
   * @description Carga los hospitales paginados
   * @param paginateFrom
   * @return {Observable<Object>}
   */
  loadHospitals(paginateFrom:number = 0){

    /**
     * @var url
     * @description url a la que se va a hacer la petición get
     * @type {string}
     */
    let url = URL_API+"/hospital/?start="+paginateFrom;

    return this.http.get(url)
      .catch(error =>{
        if(error.status === 500){
          swal(error.error.message,error.error.errors,'error');
        }

        return Observable.throw(error);
      })


  }


  /**
   * @summary getHospital
   * @description Obtiene los datos de un hospital concreto
   * @param id => id del hospital
   * @return {Observable<Object>}
   */
  getHospital(id:string){

    let url = URL_API+"/hospital/"+id;

    return this.http.get(url)
      .map((response:any)=>{
       return  response.hospital
      })
      .catch(error =>{

        if(error.status === 500){
          swal(error.error.message,error.error.errors,'error');
        }

        if(error.status === 404){
          swal(error.error.message,'No se encontro el hospital','error');
        }

        return Observable.throw(error);
      })

  }

  /**
   * @summary saveHospital()
   * @description Añade un hospital a la base de datos y si ya existe lo actualiza
   * @param hospital => Hospital
   * @return {Observable<Object>}
   */
  saveHospital(hospital:Hospital){

    /**
     * @var url
     * @description url a la que se va a hacer la petición post
     * @type {string}
     */
    let url = URL_API+"/hospital";


    const httpOptions = {
      headers: new  HttpHeaders({
        'Authorization': this.token
      })
    };

    //Si en el hospital recibido como parametro existe el campo _id significa que el hospital ya esta creado por lo tanto se modificara
    if(hospital._id){

      //Se añade el _id del hospital a la url
      url += '/'+hospital._id;

      //Se hace la peticion put para hacer la actualización
      return this.http.put(url,hospital,httpOptions)
        .map((response:any)=>{
            return response.hospital_updated
          }
        )
        //En caso de que halla errores en la petición salta el catch
        .catch(error=> {

          if (error.status === 404) {
            swal(error.error.message, 'el hospital no existe ', 'error');
          }

          if (error.status === 500) {
            swal(error.error.message, error.error.errors, 'error');
          }

          if (error.status === 400) {
            swal(error.error.message, ' los datos enviados no son correctos', 'error');
          }

          return Observable.throw(error);

        });

        }else{

      return this.http.post(url,hospital,httpOptions)
        .map((response:any)=>{
            return response.hospital_saved;
          }
        )
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

  /**
   * @summary searchHospitals()
   * @description Busca hospitales basandose en un criterio de busqueda
   * @param criteria => criterio de busqueda
   * @return {Observable<R>}
   */
  searchHospitals(criteria:string){

    let  url = URL_API+"/search/collection/hospitals/"+criteria;

    return this.http.get(url)
      .map((response:any)=>response.hospitals )
      .catch(error =>{

        if(error.status === 400){
          swal('ERROR al realizar la busqueda',error.error.message,'error');
        }

        return Observable.throw(error);
      })

  }



  deleteHospital(id : string){

    let  url = URL_API+"/hospital/"+id;

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




}
