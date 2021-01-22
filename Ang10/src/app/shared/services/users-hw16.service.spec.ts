import { TestBed } from '@angular/core/testing';

import { UsersHw16Service } from './users-hw16.service';

describe('UsersHw16Service', () => {
  let service: UsersHw16Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersHw16Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
