import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class MedicoServiceService {
  private backLink = environment.apiLink+"doctor/";
  private headers = new HttpHeaders({
    'x-access-token-doctor': localStorage.getItem('medicoJwt')
  });

  constructor(private http: HttpClient) { }

  async getMedico() {
    let resposta = await this.http.get(this.backLink,{headers: this.headers}).toPromise();
    console.log(resposta);
    return resposta;
  }

  async postMedico(Dados) {
    console.log("Inicializando o post");
    let resposta = await this.http.post(this.backLink + "", Dados, { observe: 'response' }).toPromise();
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }

  async loginMedico(Dados) {
    console.log("Inicializando o post");
    let resposta = await this.http.post(this.backLink + "login", Dados, { observe: 'response' }).toPromise();
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }
}
