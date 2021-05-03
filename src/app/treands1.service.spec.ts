import { TestBed } from '@angular/core/testing';

import { Treands1Service } from './treands1.service';

describe('Treands1Service', () => {
  let service: Treands1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Treands1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
