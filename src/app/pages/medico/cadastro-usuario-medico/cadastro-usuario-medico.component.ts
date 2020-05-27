import { Component, OnInit } from '@angular/core';
import { Usuario }from '../../../module/usuario-module/usuario-module.module';
import { UsuarioServiceService }from '../../../service/usuario-service.service';

@Component({
  selector: 'app-cadastro-usuario-medico',
  templateUrl: './cadastro-usuario-medico.component.html',
  styleUrls: ['./cadastro-usuario-medico.component.css']
})
export class CadastroUsuarioMedicoComponent implements OnInit {
  usuario: Usuario={} as Usuario;

  constructor(private usuarioService: UsuarioServiceService) { }

  ngOnInit(): void {
  }

  async onSubmit(form){
    console.log(form.value);
    await this.usuarioService.postUsuario(form.value).then((x)=>{
      console.log(x);
      alert('Usuario cadastrado com suscesso!');
    }).catch((err)=>{
      console.log("Deu erro: "+JSON.parse(err.body))
    })
    
  }

}
