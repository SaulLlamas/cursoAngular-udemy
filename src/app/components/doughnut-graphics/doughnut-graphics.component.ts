import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-doughnut-graphics',
  templateUrl: './doughnut-graphics.component.html',
  styles: []
})
export class DoughnutGraphicsComponent implements OnInit {

  @Input() title:string;
  @Input() data:number[];
  @Input() labels:string[];
  @Input() type:string;


  constructor() { }

  ngOnInit() {
  }

}
