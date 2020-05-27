import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioMedicoComponent } from './inicio-medico.component';

describe('InicioMedicoComponent', () => {
  let component: InicioMedicoComponent;
  let fixture: ComponentFixture<InicioMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
