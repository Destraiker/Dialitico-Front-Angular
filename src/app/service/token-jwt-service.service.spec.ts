import { TestBed } from '@angular/core/testing';

import { TokenJwtServiceService } from './token-jwt-service.service';

describe('TokenJwtServiceService', () => {
  let service: TokenJwtServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenJwtServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
