import { Component, OnInit } from '@angular/core';
import { Usuario }from '../../../module/usuario-module/usuario-module.module';
import { UsuarioServiceService }from '../../../service/usuario-service.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  usuario: Usuario={} as Usuario;
  aux: any;
  constructor(private usuarioService: UsuarioServiceService) { }

  async ngOnInit() {
    await this.usuarioService.getUsuario().then((x)=>{
      this.aux=x;
      this.usuario=this.aux.data[0];
    }).catch((err)=>{
      console.log("ERRO: "+err);
    })
  }

}
