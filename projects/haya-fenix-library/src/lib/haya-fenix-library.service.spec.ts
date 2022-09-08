import { TestBed } from '@angular/core/testing';

import { HayaFenixLibraryService } from './haya-fenix-library.service';

describe('HayaFenixLibraryService', () => {
  let service: HayaFenixLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HayaFenixLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
