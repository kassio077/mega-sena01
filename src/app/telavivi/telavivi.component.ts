import { Component, OnInit } from '@angular/core';
import { MegaService } from 'app/mega.service';

@Component({
  selector: 'app-telavivi',
  templateUrl: './telavivi.component.html',
  styleUrls: ['./telavivi.component.css'],
  providers: [MegaService]
})
export class TelaviviComponent implements OnInit { // pesquisar quem chama esta classe

  input_background_color: boolean;

  valor: string = 'bola';

  bolas_sorteadas = ['numeros_sorteados[0]', 'numeros_sorteados[1]', 'numeros_sorteados[2]'];

  numeros_sorteados: string[] = ['','','','','',''];

  estados: string[] = [];

  megaService: MegaService;

  constructor(_megaService: MegaService) {
    this.megaService = _megaService;
    console.log("Aqui!!!!");

  }

  isRepetido(bola: string){
    console.log(this.numeros_sorteados)
    var ver = true;
    for(let j =0; j<this.numeros_sorteados.length; j++){
      if(this.numeros_sorteados[j] == bola){
        ver = false;
        break;
      }
    }
   
    return ver;
  }

  sortear(){
    this.input_background_color = true;
    this.numeros_sorteados = ['a', 'b', 'c', 'd', 'e', 'f'];
   
    for(let i = 0; i<this.numeros_sorteados.length; i++){
    
      var bola = Math.floor((Math.random() * 60) + 1)+'';

      for(let j =0; j<this.numeros_sorteados.length; j++){
        
        if(this.numeros_sorteados[j] == bola){
          i--;
          break;
        }else if(j == 5){
          this.numeros_sorteados[i] = bola;
        }
      }

      
       
    }
    
    console.log(this.numeros_sorteados);
    console.log('==========================');
   
   
    
  }

  ngOnInit() {
    this.estados = this.megaService.getEstados();
  }

}
