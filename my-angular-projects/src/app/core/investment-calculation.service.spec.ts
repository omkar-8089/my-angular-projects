import { TestBed } from '@angular/core/testing';

import { InvestmentCalculationService } from './investment-calculation.service';

describe('InvestmentCalculationService', () => {
  let service: InvestmentCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
