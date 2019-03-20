import { TestBed, inject } from '@angular/core/testing';

import { LoadMiniprofilerService } from './load-miniprofiler.service';

describe('LoadMiniprofilerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadMiniprofilerService]
    });
  });

  it('should be created', inject([LoadMiniprofilerService], (service: LoadMiniprofilerService) => {
    expect(service).toBeTruthy();
  }));
});
