import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Dados } from '../../../module/dados-module/dados-module.module';
import { DadosServiceService } from '../../../service/dados-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-usuario',
  templateUrl: './inicio-usuario.component.html',
  styleUrls: ['./inicio-usuario.component.css']
})
export class InicioUsuarioComponent implements OnInit {
  dado: Dados = {} as Dados;
  liquido: number = 0;
  aux: any;
  dataHoje=this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  constructor(private datePipe: DatePipe, private dadosService: DadosServiceService, private router:Router) { }

  async ngOnInit() {
    let data = new Date();
    let data2=this.datePipe.transform(data, 'yyyy-MM-dd');
    console.log(data2);
    await this.dadosService.getDadosByData(data2).then((x) => {
      this.aux = x;
      if (this.aux.data[0] == undefined || this.aux.data[0] == null) {
        document.getElementById('addLiquido').style.display="none";
        document.getElementById('liquidoTotal').style.display="none";
        document.getElementById('semDados').style.display="block";
      } else {
        this.dado = this.aux.data[0];
        this.dado.Data_2=this.datePipe.transform(this.dado.Data_2, 'dd/MM/yyyy');
      }

    }).catch((err) => {
      console.log("ERROU");
      console.log(err);
    })
  }

  async onSubmit(form) {
    form.value.idDados=this.dado.idDados;
    await this.dadosService.putLiquido(form.value).then((x)=>{
      console.log(x);
      this.ngOnInit();
    }).catch((err)=>{
      console.log(err);
    })
  }

}
