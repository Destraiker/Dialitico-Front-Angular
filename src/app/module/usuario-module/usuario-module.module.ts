import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuarioModuleModule { }

export interface Usuario{
  idUsuario: number;
  Medico_idMedico: string;
  Nome: string;
  CPF: number;
  Senha:string;
}