import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDetalhesMedicoComponent } from './usuario-detalhes-medico.component';

describe('UsuarioDetalhesMedicoComponent', () => {
  let component: UsuarioDetalhesMedicoComponent;
  let fixture: ComponentFixture<UsuarioDetalhesMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioDetalhesMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDetalhesMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
