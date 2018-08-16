import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  films: Object;

  constructor(private filmsSrv: FilmsService) { }

  ngOnInit() {
    this.filmsSrv.search('haffffffdsfsdrry')
      .then((data: Object) => {
        this.films = data;
      });
  }

}
