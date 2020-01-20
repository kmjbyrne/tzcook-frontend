import { TestBed } from '@angular/core/testing';

import { AtomsService } from './atoms.service';

describe('AtomsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtomsService = TestBed.get(AtomsService);
    expect(service).toBeTruthy();
  });
});
