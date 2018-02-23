import { Component, OnInit } from '@angular/core';

//Importación del servicio usuario
import {UserService} from '../../../../services/user/user.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styles: []
})
export class HeaderBarComponent implements OnInit {

  constructor(public _userService : UserService) { }

  ngOnInit() {
  }

}
