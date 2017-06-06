import { Component, OnInit } from '@angular/core';
import { GeojsonService } from './geojson.service';
import { LatLngLiteral } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  zoom = 4;
  center: LatLngLiteral = {lat: -28, lng: 137};
  errorMessage: string;
  geoJsonObject: object;

  constructor(private geojsonService: GeojsonService) {}

  getGeoJSON(): void {
    this.geojsonService.getGeoJSON().subscribe(
                    geoJsonObject => this.geoJsonObject = geoJsonObject,
                    error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.getGeoJSON();
  }

  clicked(clickEvent) {
    clickEvent.feature.setProperty('isColorful', true);
  }

  styleFunc(feature) {
    let color = 'gray';
    if (feature.getProperty('isColorful')) {
      color = feature.getProperty('color');
    }
    return ({
      fillColor: color,
      strokeColor: color,
      strokeWeight: 4
    });
   }
}
