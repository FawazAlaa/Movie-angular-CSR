import { TestBed } from '@angular/core/testing';

import { Searchhttp } from './searchhttp';

describe('Searchhttp', () => {
  let service: Searchhttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Searchhttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
