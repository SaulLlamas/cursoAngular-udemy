import { Component, OnInit } from '@angular/core';
import {SideBarService} from '../../../../services/shared/sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {

  constructor(public  _sideBar : SideBarService) { }

  ngOnInit() {
  }

}
