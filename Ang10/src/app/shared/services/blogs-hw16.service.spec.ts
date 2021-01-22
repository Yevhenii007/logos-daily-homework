import { TestBed } from '@angular/core/testing';

import { BlogsHw16Service } from './blogs-hw16.service';

describe('BlogsHw16Service', () => {
  let service: BlogsHw16Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsHw16Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
