import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class TokenJwtServiceService {
  private backLink = environment.apiLink+"token/";

  private headersUser = new HttpHeaders({
    'x-access-token-user': localStorage.getItem('usuarioJwt')
  });
  private headersDoctor = new HttpHeaders({
    'x-access-token-doctor': localStorage.getItem('medicoJwt')
  });

  constructor(private http: HttpClient) { }

  async validarTokenJwtUser(){
    console.log("Inicializando o post");
    let resposta = await this.http.post(this.backLink +"user/",null, { observe: 'response', headers: this.headersUser }).toPromise();
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }
  async validarTokenJwtDoctor(){
    console.log("Inicializando o post");
    let resposta = await this.http.post(this.backLink+ "doctor/",null, { observe: 'response', headers: this.headersDoctor }).toPromise();
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }
}
