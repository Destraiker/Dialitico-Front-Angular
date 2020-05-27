import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUsuarioMedicoComponent } from './cadastro-usuario-medico.component';

describe('CadastroUsuarioMedicoComponent', () => {
  let component: CadastroUsuarioMedicoComponent;
  let fixture: ComponentFixture<CadastroUsuarioMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroUsuarioMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUsuarioMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
