import { Component, Input, OnInit } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';

@Component({
  selector: 'app-single-museum',
  templateUrl: './single-museum.component.html',
  styleUrls: ['./single-museum.component.css']
})
export class SingleMuseumComponent implements OnInit {
  @Input() museumId : number;
  @Input() museumName : string;
  @Input() museumAdress : string;
  @Input() museumZipCode : string;
  @Input() museumCity : string;
  @Input() museumPhone : string;
  @Input() museumWebSite : string;
  @Input() museumOpening : string;

  constructor(private museumListService: MuseumListService) { }

  ngOnInit() {
  }

}
