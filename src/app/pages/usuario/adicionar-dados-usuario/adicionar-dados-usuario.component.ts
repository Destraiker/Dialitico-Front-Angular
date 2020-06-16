import { Component, OnInit } from '@angular/core';
import { Dados }from '../../../module/dados-module/dados-module.module';
import { DadosServiceService }from '../../../service/dados-service.service';

@Component({
  selector: 'app-adicionar-dados-usuario',
  templateUrl: './adicionar-dados-usuario.component.html',
  styleUrls: ['./adicionar-dados-usuario.component.css']
})
export class AdicionarDadosUsuarioComponent implements OnInit {
  dados:Dados={Liquido: 0} as Dados;
  aux: any;
  constructor(private dadosService: DadosServiceService) { }

  ngOnInit(): void {
    let windowHeight:number = window.innerHeight;
    document.getElementById('cartao').style.height= windowHeight+'px';
  }

  async onSubmit(form){
    await this.dadosService.postDados(form.value).then((x)=>{
      alert('Cadastrado');
    }).catch((err)=>{
      console.log("ERRO: "+err);
    })
  }

}
