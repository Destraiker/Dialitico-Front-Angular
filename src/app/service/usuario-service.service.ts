import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  private backLink = environment.apiLink+"user/";
  private headersUser = new HttpHeaders({
    'x-access-token-user': localStorage.getItem('usuarioJwt')
  });
  private headersDoctor = new HttpHeaders({
    'x-access-token-doctor': localStorage.getItem('medicoJwt')
  });

  constructor(private http: HttpClient) { }

  async getUsuarioByMedico() {
    let resposta = await this.http.get(this.backLink+"doctor/", {headers: this.headersDoctor}).toPromise();
    console.log(resposta);
    return resposta;
  }

  async getUsuario() {
    //console.log(idUsuario);
    let resposta = await this.http.get(this.backLink,{headers:this.headersUser}).toPromise();
    console.log(resposta);
    return resposta;
  }
  async getByIdUsuario(idUsuario) {
    //console.log(idUsuario);
    let resposta = await this.http.get(this.backLink+ "doctor/"+idUsuario,{headers:this.headersDoctor}).toPromise();
    console.log(resposta);
    return resposta;
  }

  async postUsuario(Dados) {
    let resposta = await this.http.post(this.backLink + "", Dados, { observe: 'response', headers:this.headersDoctor }).toPromise();
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }

  async loginUsuario(Dados) {
    console.log("Inicializando o post");
    let resposta = await this.http.post(this.backLink + "login", Dados, { observe: 'response' }).toPromise();
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }
}
