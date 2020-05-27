import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../../module/usuario-module/usuario-module.module';
import { UsuarioServiceService } from '../../../service/usuario-service.service';
import { Dados } from '../../../module/dados-module/dados-module.module';
import { DadosServiceService } from '../../../service/dados-service.service';

@Component({
  selector: 'app-usuario-detalhes-medico',
  templateUrl: './usuario-detalhes-medico.component.html',
  styleUrls: ['./usuario-detalhes-medico.component.css']
})
export class UsuarioDetalhesMedicoComponent implements OnInit {
  usuario: Usuario={} as Usuario;
  aux: any;
  dados: Dados[];

  constructor(private activatedRoute: ActivatedRoute, private usuarioService: UsuarioServiceService, private dadosService: DadosServiceService) { }

  async ngOnInit() {
    const par = this.activatedRoute.snapshot.paramMap.get('idUsuario');

    await this.usuarioService.getByIdUsuario(par).then(async (x) => {
      this.aux = x;
      this.usuario = this.aux.data[0];
      await this.dadosService.getDadosByMedicoUser(this.usuario.idUsuario).then((x) => {
        this.aux = x;
        this.dados = this.aux.data;
      }).catch((err) => {
        console.log("ERRO: " + err);
      })
    }).catch((err) => {
      console.log("ERRO: " + err);
    })
  }

}
