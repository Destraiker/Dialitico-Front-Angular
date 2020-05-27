import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {TokenJwtServiceService} from '../service/token-jwt-service.service';

@Injectable({
  providedIn: 'root'
})
export class MedicoGuardService implements CanActivate {

  constructor(private serviceJtw: TokenJwtServiceService){}

  async canActivate() {
    if(localStorage.getItem('medicoJwt')){
      var aut=false;
      await this.serviceJtw.validarTokenJwtDoctor().then((x)=>{
        aut= true;
      }).catch((err)=>{
        aut= false;
      });
      return aut;
    }else{
      return false;
    }
  }
}
