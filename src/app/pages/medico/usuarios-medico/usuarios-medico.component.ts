import { Component, OnInit } from '@angular/core';
import { Usuario }from '../../../module/usuario-module/usuario-module.module';
import { UsuarioServiceService }from '../../../service/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-medico',
  templateUrl: './usuarios-medico.component.html',
  styleUrls: ['./usuarios-medico.component.css']
})
export class UsuariosMedicoComponent implements OnInit {
  usuarios: Usuario [];
  aux: any;

  constructor(private usuarioService: UsuarioServiceService, private router: Router) { }

  async ngOnInit() {
    await this.usuarioService.getUsuarioByMedico().then((x)=>{
      this.aux=x;
      this.usuarios=this.aux.data;
    }).catch((err)=>{
      console.log(err);
    })
  }

  irDetalhes(idUsuario){
    this.router.navigate(['/medico/usuario/'+idUsuario]);
  }

}
