import { Component, OnInit } from '@angular/core';
import { Medico } from '../../../module/medico-module/medico-module.module'
import { MedicoServiceService } from '../../../service/medico-service.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-perfil-medico',
  templateUrl: './perfil-medico.component.html',
  styleUrls: ['./perfil-medico.component.css']
})
export class PerfilMedicoComponent implements OnInit {
  medico: Medico = {} as Medico;
  aux: any;

  constructor(private medicoService: MedicoServiceService, config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  async ngOnInit() {
    let windowHeight: number = window.innerHeight;
    document.getElementById('pagina').style.height = windowHeight + 'px';

    await this.medicoService.getMedico().then((x) => {
      this.aux = x;
      this.medico = this.aux.data[0];
    }).catch((err) => {
      console.log("ERRO: " + err);
    })
  }

  async deletar() {

  }

  open(content) {
    this.modalService.open(content);
  }

  async onSubmit(form) {
    console.log(form.value);
    await this.medicoService.postMedico(form.value).then((x)=> {
      alert('Alterado');
      
    }).catch((err)=>{
      console.log('Deu erro: '+err.body)
    })
    
  }

}
