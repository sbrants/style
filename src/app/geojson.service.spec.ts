import { TestBed, inject } from '@angular/core/testing';

import { GeojsonService } from './geojson.service';

describe('GeojsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeojsonService]
    });
  });

  it('should ...', inject([GeojsonService], (service: GeojsonService) => {
    expect(service).toBeTruthy();
  }));
});
