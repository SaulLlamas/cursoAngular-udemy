import { Injectable } from '@angular/core';

//Importación de la configuración de la url
import {URL_API} from '../../config/config';

@Injectable()
export class UploadFileService {

  constructor() {}

  /**
   * @summary uploadFile()
   * @description Sube un archivo al servidor
   * @param file => Archivo que se quiere subir
   * @param element => Elemento donde se quiere subir el archivo (User, Hospital,Doctor)
   * @param id => Identificacion del objeto al cual se le quiere asignar la imagen
   * @param token => Token del usuario para enviarlo en la cabecera al servidor
   */
  uploadFile(file:File,element:string,id:string,token:string){

    return new  Promise((resolve,reject)=>{

      //El objeto form data guarda la informacion que va a tener la pedición
      let formData = new FormData();

      //Objeto de la pedición
      let xhr  = new XMLHttpRequest();


      formData.append('image',file,file.name);

      //Url a la que se va ha hacer la llamada
      let url = URL_API+"/upload/"+element+"/"+id;


      /*
       Utilizando open se realiza la llamada indicando
       - Metodo
       - Url
       - Booleano que indica si la ejecución es asincrona
       */
      xhr.open('PUT',url,true);

      //Si se encuentra el token como parametro de la función se envia en la cabecera
      //En caso de no enviarse el token el servidor mandara un mensaje de acesso denegaado y no se realizara la subida del archivo
      if(token){
        xhr.setRequestHeader('Authorization', token);
      }

      xhr.send(formData);


      xhr.onreadystatechange = ()=>{

        if(xhr.readyState === 4){

          if(xhr.status === 200){
            resolve(JSON.parse(xhr.response));
          }else{
            reject(JSON.parse(xhr.response));
          }

        }

      }
    });

  }

}
