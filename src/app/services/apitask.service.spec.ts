import { TestBed } from '@angular/core/testing';

import { ApitaskService } from './apitask.service';

describe('ApitaskService', () => {
  let service: ApitaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApitaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
