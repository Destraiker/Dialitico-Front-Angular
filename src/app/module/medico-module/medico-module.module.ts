import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MedicoModuleModule { }

export interface Medico{
  idMedico: number;
  Nome: string;
  Crm: string;
  Login: string;
  Senha: string;
}