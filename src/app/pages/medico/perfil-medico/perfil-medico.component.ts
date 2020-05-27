import { Component, OnInit } from '@angular/core';
import {Medico} from '../../../module/medico-module/medico-module.module'
import {MedicoServiceService} from '../../../service/medico-service.service'

@Component({
  selector: 'app-perfil-medico',
  templateUrl: './perfil-medico.component.html',
  styleUrls: ['./perfil-medico.component.css']
})
export class PerfilMedicoComponent implements OnInit {
  medico: Medico={} as Medico;
  aux:any;
  constructor(private medicoService: MedicoServiceService) { }

  async ngOnInit(){
    await this.medicoService.getMedico().then((x)=>{
      this.aux=x;
      this.medico=this.aux.data[0];
    }).catch((err)=>{
      console.log("ERRO: "+err);
    })
  }

}
