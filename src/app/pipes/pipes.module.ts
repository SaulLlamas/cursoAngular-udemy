import { NgModule } from '@angular/core';

//Importacion de los pipes
//Pipe para la imagen dle usuario
import {ImagePipe} from './image.pipe';


@NgModule({
  imports: [],
  declarations: [
    ImagePipe
  ],
  exports:[
    ImagePipe
  ]
})
export class PipesModule { }
