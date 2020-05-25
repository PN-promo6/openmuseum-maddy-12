import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Museum } from '../models/museum/museum';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  museums: Museum[];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {

    this.dataService.fetchMuseums()
      .subscribe(

        (res) => {
          this.museums = res;
        },
        (error) => {
          console.log(error);
        }
      )
  }

}
