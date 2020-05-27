import { Component, OnInit } from '@angular/core';
import { Usuario }from '../../../module/usuario-module/usuario-module.module';
import { UsuarioServiceService }from '../../../service/usuario-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {
  usuario: Usuario={} as Usuario;
  aux: any;
  constructor(private usuarioService: UsuarioServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(form){
    await this.usuarioService.loginUsuario(form.value).then((x)=>{
      this.aux=x.body;
      localStorage.setItem('usuarioJwt',this.aux.data.jwt);
      localStorage.setItem('usuarioNome',this.aux.data.data.Nome);
      this.router.navigate(['/usuario/']);
    }).catch((err)=>{
      console.log("Funfo não pq: "+err.body);
    })
  }
}
