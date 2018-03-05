import { Component, OnInit } from '@angular/core';

//Importación del modelo usuario
import {User} from '../../models/user.model';
//Servicio de usuario
import {UserService} from '../../services/user/user.service';
import {current} from 'codelyzer/util/syntaxKind';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  current_user:User;

  users:User[]=[];

  paginate_from:number = 0;

  total_results:number = 0;

  /**
   * @var loading
   * @description tiene un valor true cuendo se estan opteniendo los datos y un valor false cuando ya se han optenido
   * @type {boolean}
   */
  loading:boolean = true;

  constructor(public _userService:UserService) {
    this.current_user = _userService.user;
  }

  ngOnInit() {
    this.loadUsers();
  }

  /**
   * @summary loadUsers()
   * @description Obtiene los usuarios paginados del servicio User
   */
  loadUsers(){

    this.loading = true;

    this._userService.loadUsers(this.paginate_from)
      .subscribe((response:any) =>{
        //Se guardan los usuarios resultantes en el array de usuarios
        this.users = response.users;
        this.total_results = response.total_results;
        this.loading = false;
      });


  }

  changeFrom(value:number){

    /**
     * @var from
     * @description define la posicion del array de usuarios desde la que se va empezar a mostrar en la vista
     * @type {number}
     */
    let from:number = this.paginate_from + value;

    //El valor de la variable from no podra ser mayor al numero de usuarios
    if(from >= this.total_results){
      return
    }

    //El valor de la variable from no podra ser menor que cero
    if(from < 0 ){
      return
    }

    this.paginate_from = from;
    this.loadUsers();

  }

  searchUser(criteria:string){


    if(criteria.length <= 0){
      this.loadUsers();
      return;
    }

    this.loading = true;

    this._userService.searchUsers(criteria)
      .subscribe((users_found:User[])=>{
        this.users = users_found;
        this.loading = false;
      });
  }

  deleteUser(user:User){
    //Hay que tener en cuenta que no se puede borrar el usuario que se esta utilizando
    if(user._id === this.current_user._id){
      swal('error al borrar usuario','No te puedes borrar a ti mismo','error');
      return;
    }

    //Utilizando sweet alert se mostrara un cuadro de dialogo que preguntara al usuario si esta segoro que quiere borrar el usuario
    swal({
      title: "¿Estas seguro que deseas borrar el usuario "+user.user_name+"?",
      text: "El usuario se borrara y no volveras a acceder a él",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      //Si la respuesta del usuario es afirmativa se borrara el uruario si no se cancelara la operación
      .then((willDelete) => {
        if (willDelete){

          //Para borrar el usuario se llama a la funcion deleteUser() del servicio User
          this._userService.deleteUser(user._id)
            .subscribe((response:any)=>{
              swal('usuario borrado correctamente',user.user_mail,'success');
              //Se volveran a mostrar los usuarios desde la posicion 0 del array
              this.paginate_from = 0;
              this.loadUsers();
            });

        } else {
          swal("operación cancelada");
        }
      });

  }

  saveChanges(user:User){

    this._userService.updateUser(user).subscribe((response:any)=>{
      this.loadUsers();
    });
    

  }

}
