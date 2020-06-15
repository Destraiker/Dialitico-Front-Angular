import { Component, OnInit, ElementRef } from '@angular/core';
import {Medico} from '../../../module/medico-module/medico-module.module'
import {MedicoServiceService} from '../../../service/medico-service.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-medico',
  templateUrl: './login-medico.component.html',
  styleUrls: ['./login-medico.component.css']
})
export class LoginMedicoComponent implements OnInit {
  medico:Medico={} as Medico;
  aux:any;

  constructor(private medicoService: MedicoServiceService, private router: Router,private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#CE1515';
  }

  async onSubmit(form) {
    console.log(form.value);
    await this.medicoService.loginMedico(form.value).then((x)=>{
      this.aux=x.body;
      localStorage.setItem('medicoJwt',this.aux.data.jwt);
      localStorage.setItem('medicoNome',this.aux.data.data.Nome);
      this.router.navigate(['medico/']);
    }).catch((err)=>{
      console.log("Funfo não pq: "+err.body);
    })
  }
  
}
