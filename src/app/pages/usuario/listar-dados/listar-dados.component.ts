import { Component, OnInit } from '@angular/core';
import { Dados }from '../../../module/dados-module/dados-module.module';
import { DadosServiceService }from '../../../service/dados-service.service';

@Component({
  selector: 'app-listar-dados',
  templateUrl: './listar-dados.component.html',
  styleUrls: ['./listar-dados.component.css']
})
export class ListarDadosComponent implements OnInit {
  dados: Dados [];
  aux:any;
  constructor(private dadosService: DadosServiceService) { }

  async ngOnInit() {
    await this.dadosService.getDados().then((x)=>{
      this.aux=x;
      this.dados=this.aux.data;
    }).catch((err)=>{
      console.log("ERRO: "+err);
    })
  }



}
