import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    let windowHeight:number = window.innerHeight;
    this.elementRef.nativeElement.ownerDocument.body.style.marginTop = 'auto';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#CE1515';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage="url('../../img/bg_1.png')";
    document.getElementById('cartao').style.height= windowHeight+'px';
  }

}
