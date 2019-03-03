import { Component, OnInit, Input } from '@angular/core';
import { MegaService } from 'app/mega.service';
@Component({
  selector: 'app-bola',
  templateUrl: './bola.component.html',
  styleUrls: ['./bola.component.css']
  
  
})
export class BolaComponent implements OnInit {

  @Input('input_background_color') isOver: boolean = false;

  @Input('bola_sorteada') valor: string = "bola";

  constructor(private megaService: MegaService) {
   
   }

  ngOnInit() {
    console.log(this.megaService.getEstados())
  }

}
