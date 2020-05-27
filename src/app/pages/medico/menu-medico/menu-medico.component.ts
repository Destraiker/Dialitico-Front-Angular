import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-menu-medico',
  templateUrl: './menu-medico.component.html',
  styleUrls: ['./menu-medico.component.css']
})
export class MenuMedicoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sair(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
