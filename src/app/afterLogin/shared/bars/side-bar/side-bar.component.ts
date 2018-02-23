import { Component, OnInit } from '@angular/core';
//Importación del servicio SideBar para obtener las opciones del menu lateral
import {SideBarService} from '../../../../services/shared/sidebar.service';
import {UserService} from '../../../../services/user/user.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {

  //Se incluye el servicio SideBar en el constructor
  constructor(public  _sideBar : SideBarService , public _userService : UserService) { }

  ngOnInit() {
  }

}
