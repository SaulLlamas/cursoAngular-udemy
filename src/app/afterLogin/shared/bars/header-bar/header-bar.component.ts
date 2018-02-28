import { Component, OnInit } from '@angular/core';

//Importación del servicio usuario
import {UserService} from '../../../../services/user/user.service';
//Importacion del modelo User
import {User} from '../../../../models/user.model';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styles: []
})
export class HeaderBarComponent implements OnInit {

  current_user: User;

  constructor(public _userService : UserService) { }

  ngOnInit() {
    this.current_user = this._userService.user;
  }

}
