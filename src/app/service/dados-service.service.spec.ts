import { TestBed } from '@angular/core/testing';

import { DadosServiceService } from './dados-service.service';

describe('DadosServiceService', () => {
  let service: DadosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
