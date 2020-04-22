import { Component, OnInit } from '@angular/core';
import { MuseumListService } from '../services/museumList.service'

@Component({
  selector: 'app-root',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {
  museums: any[];

  constructor(private museumListService: MuseumListService) { }

  ngOnInit() {
    this.museums = this.museumListService.museums;
  }

}
