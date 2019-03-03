import { Injectable } from '@angular/core';

@Injectable()
export class MegaService {

  estados: string[] = ['Alagoas', 'Sergipe', 'Bahia'];

  tipo_de_servico: number;

  constructor() {
    console.log("Serviço chamado!")
     
  }

  getEstados(){
    return this.estados;
  }

}
