import { TestBed } from '@angular/core/testing';

import { BlogsHw17ServerService } from './blogs-hw17-server.service';

describe('BlogsHw17ServerService', () => {
  let service: BlogsHw17ServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsHw17ServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
