import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//HTTP
import { HttpClientModule } from '@angular/common/http';
import { DadosServiceService  } from './service/dados-service.service';

//FORMS
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

import{MedicoGuardService} from './guards/medico-guard.service';
import{UsuarioGuardService} from './guards/usuario-guard.service';

import {CookieService} from 'ngx-cookie-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DatePipe } from '@angular/common'; 

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CadastroMedicoComponent,
    LoginMedicoComponent,
    MenuMedicoComponent,
    InicioMedicoComponent,
    UsuariosMedicoComponent,
    UsuarioDetalhesMedicoComponent,
    CadastroUsuarioMedicoComponent,
    PerfilMedicoComponent,
    LoginUsuarioComponent,
    MenuUsuarioComponent,
    InicioUsuarioComponent,
    AdicionarDadosUsuarioComponent,
    ListarDadosComponent,
    PerfilUsuarioComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    DadosServiceService, 
    HttpClientModule,
    UsuarioGuardService,
    MedicoGuardService,
    CookieService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
