import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TokenJwtServiceService } from '../service/token-jwt-service.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuardService implements CanActivate {
  constructor(private serviceJtw: TokenJwtServiceService, private cookie: CookieService) { }

  mensgaem: any;

  async canActivate() {
    if(localStorage.getItem('usuarioJwt')){
      var aut=false;
      await this.serviceJtw.validarTokenJwtUser().then((x)=>{
        aut= true;
      }).catch((err)=>{
        aut= false;
      })
      return aut;
    }else{
      return false;
    }
  }
}

