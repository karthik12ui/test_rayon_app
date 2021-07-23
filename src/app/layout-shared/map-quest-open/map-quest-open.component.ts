import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
declare var L: any;
@Component({
  selector: 'app-map-quest-open',
  templateUrl: './map-quest-open.component.html',
  styleUrls: ['./map-quest-open.component.scss']
})
export class MapQuestOpenComponent implements OnInit {

  @Input() mapData: any;
  displayMap: boolean;
  filteredMapData: any;
  constructor( @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.displayMap = false;
    this.filterDataOfLatAndLong();
  }

  public filterDataOfLatAndLong() {
    this.filteredMapData = [];
    const that = this;
    if (this.mapData.length > 0 ) {
        this.mapData.forEach(li => {
              if (!!li.latitude && li.latitude !== null && li.latitude !== ''
              && !!li.longitude && li.longitude !== null && li.longitude !== '') {
                const locationLatLng = {
                  lat: li.latitude,
                  lng: li.longitude
                };
                li.locationLatLng = locationLatLng;
                if (!!li.severity && li.severity !== null) {
                  switch (li.severity) {
                    case  'High':
                      li.mapPincolor = '#ffa500';
                      break;
                    case  'Low':
                      li.mapPincolor = '#0077B4';
                      break;
                    default:
                      li.mapPincolor = '#000000';
                  }
                }
                that.filteredMapData.push(li);
              }
        });
      }
    console.log(this.filteredMapData, 'filteredMapData');
    this.mapQuestPlugin();
  }
  private mapQuestPlugin(): void {
    this.displayMap = true;
    const that = this;
    L.mapquest.key = 'C8fIN18Qbo5rRaWgbxhJXg3ktbYp3HiV';
    const container =  document.getElementById('map');
    if (container) {
       // Initialize the Map
      const map = L.mapquest.map('map', {
        layers: L.mapquest.tileLayer('map'),
        center: [0, 0],
        zoom: 6
      });

      // Generate the feature group containing markers from the geocoded locations
      const featureGroup = that.generateMarkersFeatureGroup(this.filteredMapData);
      featureGroup.addTo(map);
      map.fitBounds(featureGroup.getBounds());
    }
  }

  generateMarkersFeatureGroup(response) {
    const group = [];
    if (response.length > 0 ) {
      response.forEach(li => {
        // Create a marker for each location
        const marker = L.marker(li.locationLatLng, {icon: L.mapquest.icons.marker(
          {
            primaryColor: li.mapPincolor
          }
        )})
        .bindPopup(li.serviceName + ', ' + li.severity);
        group.push(marker);
      });
    }
    return L.featureGroup(group);
  }
}
