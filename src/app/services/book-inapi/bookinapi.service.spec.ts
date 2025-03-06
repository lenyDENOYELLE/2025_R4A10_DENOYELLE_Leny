import { TestBed } from '@angular/core/testing';

import { BookinapiService } from './bookinapi.service';

describe('BookinapiService', () => {
  let service: BookinapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookinapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
