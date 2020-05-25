import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;

  @Input() museumCoord: number[];

  constructor() { }

  private initMap(): void {
    this.map = L.map('map', {
      //[this.museumCoord[0], this.museumCoord[1]]
      center: [39.8282, -98.5795],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    const marker = L.marker([39.8282, -98.5795]);
    marker.addTo(this.map)
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
