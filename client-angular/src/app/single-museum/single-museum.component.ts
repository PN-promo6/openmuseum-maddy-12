import { Component, Input, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { Museum } from '../models/museum/museum';

@Component({
  selector: "app-single-museum",
  templateUrl: "./single-museum.component.html",
  styleUrls: ["./single-museum.component.css"],
})
export class SingleMuseumComponent implements OnInit {
  museums: any[];

  @Input() museum: Museum;
  // @Input() museumName: string;
  // @Input() adress: string;
  // @Input() zipCode: string;
  // @Input() city: string;
  // @Input() phone: string;
  // @Input() webSite: string;
  // @Input() openInfo: string;
  // @Input() museumRef: string;
  // @Input() museumFax: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.museums = this.dataService.museums;
  }
}
