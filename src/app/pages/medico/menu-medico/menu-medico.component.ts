import { Component, OnInit,ElementRef } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-menu-medico',
  templateUrl: './menu-medico.component.html',
  styleUrls: ['./menu-medico.component.css']
})
export class MenuMedicoComponent implements OnInit {
  nome: string=localStorage.getItem('medicoNome');
  constructor(private router: Router,private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fff';
    this.elementRef.nativeElement.ownerDocument.body.style.marginTop = 'auto';
  }

  sair(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
