import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styles: []
})
export class GraphicsComponent implements OnInit {

  graphics: any = [
    {
      'labels': ['Con Alubias', 'Con Mantequilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'title': 'El pan se come con'
    },
    {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'title': 'Entrevistados'
    },
    {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'title': '¿Le dan gases las alubias ?'
    },
    {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'title': '¿Le importa que le den gases?'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
