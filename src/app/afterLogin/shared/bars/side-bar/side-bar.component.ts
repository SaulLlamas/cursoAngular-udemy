import { Component, OnInit } from '@angular/core';
//Importación del servicio SideBar para obtener las opciones del menu lateral
import {SideBarService} from '../../../../services/shared/sidebar.service';
import {UserService} from '../../../../services/user/user.service';
//Importación del modelo User
import {User} from '../../../../models/user.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {

  current_user: User

  //Se incluye el servicio SideBar en el constructor
  constructor(public  _sideBar : SideBarService , public _userService : UserService) { }

  ngOnInit() {
    this.current_user = this._userService.user;
    this._sideBar.loadmenus();
  }

}
