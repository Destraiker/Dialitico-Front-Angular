import { Component, OnInit, ElementRef } from '@angular/core';
import {Medico} from '../../../module/medico-module/medico-module.module'
import {MedicoServiceService} from '../../../service/medico-service.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.css']
})
export class CadastroMedicoComponent implements OnInit {
  medico:Medico={} as Medico;

  constructor(private medicoService: MedicoServiceService, private router: Router,private elementRef: ElementRef) { }
  
  ngOnInit(): void {
    let windowHeight:number = window.innerHeight;
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#CE1515';
    document.getElementById('cartao').style.height= windowHeight+'px';
  }

  async onSubmit(form) {
    console.log(form.value);
    await this.medicoService.postMedico(form.value).then((x)=> {
      alert('Cadastrado com sucesso!');
      this.router.navigate(['medico/login']);
    }).catch((err)=>{
      console.log('Deu erro: '+err.body)
    })
    
  }

}
