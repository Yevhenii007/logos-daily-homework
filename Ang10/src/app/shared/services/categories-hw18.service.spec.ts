import { TestBed } from '@angular/core/testing';

import { ComponentsHw18Service } from './categories-hw18.service';

describe('ComponentsHw18Service', () => {
  let service: ComponentsHw18Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsHw18Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
