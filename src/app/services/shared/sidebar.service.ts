import { Injectable } from '@angular/core';
import {UserService} from '../user/user.service';

@Injectable()
export class SideBarService {

    menus:any[]=[];

  constructor(public _userservice : UserService) {

  }

  loadmenus(){
    this.menus = this._userservice.menu_options;
  }

}
