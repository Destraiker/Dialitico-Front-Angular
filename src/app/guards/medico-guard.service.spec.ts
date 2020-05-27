import { TestBed } from '@angular/core/testing';

import { MedicoGuardService } from './medico-guard.service';

describe('MedicoGuardService', () => {
  let service: MedicoGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicoGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
