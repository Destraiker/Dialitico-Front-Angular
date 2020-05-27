import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarDadosUsuarioComponent } from './adicionar-dados-usuario.component';

describe('AdicionarDadosUsuarioComponent', () => {
  let component: AdicionarDadosUsuarioComponent;
  let fixture: ComponentFixture<AdicionarDadosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarDadosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarDadosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
