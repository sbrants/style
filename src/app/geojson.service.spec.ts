import { TestBed, getTestBed, async} from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { GeojsonService } from './geojson.service';

describe('GeojsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeojsonService],
      imports: [
        HttpModule,
      ],
    });
  });

  it('should download a FeatureCollection GeoJson', async(() => {
    const service: GeojsonService = getTestBed().get(GeojsonService);

    service.getGeoJSON().subscribe(GeoJson => {
      expect(GeoJson['type']).toEqual('FeatureCollection');
    });
  }));
});
