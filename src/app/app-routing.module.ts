import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { CadastroMedicoComponent } from './pages/medico/cadastro-medico/cadastro-medico.component';
import { LoginMedicoComponent } from './pages/medico/login-medico/login-medico.component';
import { MenuMedicoComponent } from './pages/medico/menu-medico/menu-medico.component';
import { InicioMedicoComponent } from './pages/medico/inicio-medico/inicio-medico.component';
import { UsuariosMedicoComponent } from './pages/medico/usuarios-medico/usuarios-medico.component';
import { UsuarioDetalhesMedicoComponent } from './pages/medico/usuario-detalhes-medico/usuario-detalhes-medico.component';
import { CadastroUsuarioMedicoComponent } from './pages/medico/cadastro-usuario-medico/cadastro-usuario-medico.component';
import { PerfilMedicoComponent } from './pages/medico/perfil-medico/perfil-medico.component';
import { LoginUsuarioComponent } from './pages/usuario/login-usuario/login-usuario.component';
import { MenuUsuarioComponent } from './pages/usuario/menu-usuario/menu-usuario.component';
import { InicioUsuarioComponent } from './pages/usuario/inicio-usuario/inicio-usuario.component';
import { AdicionarDadosUsuarioComponent } from './pages/usuario/adicionar-dados-usuario/adicionar-dados-usuario.component';
import { ListarDadosComponent } from './pages/usuario/listar-dados/listar-dados.component';
import { PerfilUsuarioComponent } from './pages/usuario/perfil-usuario/perfil-usuario.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';

import { MedicoGuardService } from './guards/medico-guard.service';
import { UsuarioGuardService } from './guards/usuario-guard.service';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'medico/login', component: LoginMedicoComponent },
  { path: 'medico/cadastro', component: CadastroMedicoComponent },

  {
    path: 'medico',
    component: MenuMedicoComponent,
    canActivate: [MedicoGuardService],
    children: [
      { path: '', component: InicioMedicoComponent },
      { path: 'cadastroUsuario', component: CadastroUsuarioMedicoComponent },
      { path: 'usuarios', component: UsuariosMedicoComponent },
      { path: 'usuario/:idUsuario', component: UsuarioDetalhesMedicoComponent },
      { path: 'perfil', component: PerfilMedicoComponent },
    ],
  },
  { path: 'usuario/login', component: LoginUsuarioComponent },
  {
    path: 'usuario',
    component: MenuUsuarioComponent,
    canActivate: [UsuarioGuardService],
    children: [
      { path: '', component: InicioUsuarioComponent },
      { path: 'adicionarDados', component: AdicionarDadosUsuarioComponent },
      { path: 'listarDados', component: ListarDadosComponent },
      { path: 'perfil', component: PerfilUsuarioComponent },
    ],
  },
  { path: '**', component: Pagina404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
