import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DadosModuleModule { }

export interface Dados{
  idDados: number; 
  Usuario_idUsuario: number; 
  Dreneagem_inicial: number;
  Dreneagem_final:number;
  Liquido:number; 
  Data_2: Date;
}