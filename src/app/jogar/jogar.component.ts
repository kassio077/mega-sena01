import { Component, OnInit } from '@angular/core';
import { MegaService } from 'app/mega.service';

@Component({
  selector: 'app-jogar',
  templateUrl: './jogar.component.html',
  styleUrls: ['./jogar.component.css'],
  providers: [MegaService]
})
export class JogarComponent implements OnInit {

  constructor(private megaService: MegaService) {

  }

  ngOnInit() {
    console.log(this.megaService.getEstados())
    this.megaService.getEstados().pop(); 
  }

}
