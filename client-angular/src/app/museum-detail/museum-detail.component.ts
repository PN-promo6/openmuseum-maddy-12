import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../services/data.service";
import { ActivatedRoute } from "@angular/router";
import { Museum } from '../models/museum/museum';

@Component({
  selector: "app-museum-detail",
  templateUrl: "./museum-detail.component.html",
  styleUrls: ["./museum-detail.component.css"],
})
export class MuseumDetailComponent implements OnInit {
  museum: Museum[];

  constructor(
    private DataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    const museumId = this.route.snapshot.params['museumId'];

    this.DataService.fetchMuseumById(museumId)
      .subscribe(

        (res) => {
          this.museum = res;
        },
        (error) => {
          console.log("Error : " + error);
        }
      )
  }
}