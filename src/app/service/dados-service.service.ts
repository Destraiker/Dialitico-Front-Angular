import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class DadosServiceService {
  private backLink = environment.apiLink + "user/data/";
  private headersUser = new HttpHeaders({
    'x-access-token-user': localStorage.getItem('usuarioJwt')
  });
  private headersDoctor = new HttpHeaders({
    'x-access-token-doctor': localStorage.getItem('medicoJwt')
  });

  constructor(private http: HttpClient) { }
  //Pegar todos os dados de um usuario logado
  async getDados() {
    //console.log(idUsuario);
    let resposta = await this.http.get(this.backLink, { headers: this.headersUser }).toPromise();
    console.log(resposta);
    return resposta;
  }
  //Pegar todos os dados de um usuario quando o medico esta logado
  async getDadosByMedicoUser(idUsuario) {
    let resposta = await this.http.get(this.backLink + "doctor/" + idUsuario, { headers: this.headersDoctor }).toPromise();
    console.log(resposta);
    return resposta;
  }
  //Pegar um dado de um usuario logado
  async getDadosById(idDados) {
    let resposta = await this.http.get(this.backLink + idDados, { headers: this.headersUser }).toPromise();
    console.log(resposta);
    return resposta;
  }
  //Pegar um dado de um usuario quando o medico esta logado
  async getDadosByMedicoById(idDados) {
    let resposta = await this.http.get(this.backLink + "doctor/" + idDados, { headers: this.headersDoctor }).toPromise();
    console.log(resposta);
    return resposta;
  }

  async postDados(Dados) {
    console.log("Inicializando o post");
    let resposta = await this.http.post(this.backLink, Dados, { observe: 'response', headers: this.headersUser }).toPromise();
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }
  async putDados(Dados) {
    console.log("Inicializando o post");
    let resposta = await this.http.put(this.backLink, Dados, { observe: 'response', headers: this.headersUser }).toPromise();
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }
  async deleteDados() {
    console.log("Inicializando o post");
    let resposta = await this.http.delete(this.backLink, { observe: 'response', headers: this.headersUser }).toPromise();
    console.log("Post finalizado");
    console.log(resposta);
    return resposta;
  }
}
