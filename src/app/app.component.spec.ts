import { TestBed, async } from '@angular/core/testing';
import { AgmCoreModule } from '@agm/core';
import { GeojsonService } from './geojson.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        AgmCoreModule.forRoot(),
        HttpModule,
      ],
      providers: [
        GeojsonService,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should be centered on Australia`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.center).toEqual({lat: -28, lng: 137});
  }));

});
