import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogarComponent } from './jogar.component';
import { MegaService } from 'app/mega.service';



@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    JogarComponent
  ],

  exports: [
    JogarComponent
  ],

  providers: [
   
  ]
})
export class JogarModule { }
