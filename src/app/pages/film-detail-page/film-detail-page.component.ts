import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-film-detail-page',
  templateUrl: './film-detail-page.component.html',
  styleUrls: ['./film-detail-page.component.css']
})
export class FilmDetailPageComponent implements OnInit {
  private imdbId: number;
  private film = {};

  constructor(private filmsSrv: FilmsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.filmsSrv.filmsChange$.subscribe((films) => {
      this.film = films[0];
    });

    this.route.params.subscribe((params) => {
      this.imdbId = params.id;
    });

    this.filmsSrv.searchById(this.imdbId);
  }

}
