import { Injectable } from '@angular/core';

@Injectable()
export class SideBarService {

  menus: any =[
    {
      title:'Principal',
      icon:'mdi mdi-gauge',
      submenu:[
        {title:'Dashboard',url:'/dashboard'},
        {title:'Graficos',url:'/graphics'},
        {title:'Incrementador Progress',url:'/progress'},
        {title:'Promesas',url:'/promises'},
        {title:'Obserbadores',url:'/rxjs'}
      ]
    },
    {
      title:'Mantenimientos',
      icon:'mdi mdi-folder-lock-open',
      submenu:[
        {title:'Usuarios',url:'/users'},
        {title:'Hostitales',url:'/hospitals'},
        {title:'Médicos',url:'/doctors'}
      ]
    }
  ];


  constructor() { }

}
