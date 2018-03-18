
import { Injectable } from '@angular/core';

//Importacion del valor de la URL de la API del archivo de configuración
import {URL_API} from '../../config/config';

//Importacion de HttpClient y HttpHeaders para realizar peticiones http
import {HttpClient , HttpHeaders} from '@angular/common/http';

//Importacion de map
import 'rxjs/add/operator/map';

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

    return this.http.get(url);


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
      });

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

    }else{

      return this.http.post(url,hospital,httpOptions)
        .map((response:any)=>{
            return response.hospital_saved;
          }
        )

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
      .map((response:any)=>response.hospitals );

  }


  /**
   * @summary updateHospital()
   * @description Hace una llamada PUT para actualizar un hospital
   * @param update_hospital => hospital para actualizar
   * @return {OperatorFunction<T, R>}
   */
  updateHospital(update_hospital:Hospital){

    const httpOptions = {
      headers: new  HttpHeaders({
        'Authorization': this.token
      })
    };

    let url = URL_API+"/hospital/"+update_hospital._id;

    return this.http.put(url,update_hospital,httpOptions);

  }

  deleteHospital(id : string){

    let  url = URL_API+"/hospital/"+id;

    const httpOptions = {
      headers: new  HttpHeaders({
        'Authorization': this.token
      })
    };

    return this.http.delete(url,httpOptions);


  }




}
