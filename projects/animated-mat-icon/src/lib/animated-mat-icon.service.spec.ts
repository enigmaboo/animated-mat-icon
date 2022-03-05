import { TestBed } from '@angular/core/testing';

import { AnimatedMatIconService } from './animated-mat-icon.service';

describe('AnimatedMatIconService', () => {
  let service: AnimatedMatIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimatedMatIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
