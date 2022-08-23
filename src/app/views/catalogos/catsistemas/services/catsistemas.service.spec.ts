import { TestBed } from '@angular/core/testing';

import { CatsistemasService } from './catsistemas.service';

describe('CatsistemasService', () => {
  let service: CatsistemasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatsistemasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
