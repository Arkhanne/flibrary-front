import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FilmsService } from '../../services/films.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-film-detail-page',
  templateUrl: './film-detail-page.component.html',
  styleUrls: ['./film-detail-page.component.css']
})
export class FilmDetailPageComponent implements OnInit {
  imdbId: number;
  favourite: Boolean;

  film = {
    Title: String,
    Year: Number
  };

  constructor(private filmsSrv: FilmsService, private authSrv: AuthService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.filmsSrv.filmsChange$.subscribe((films) => {
      this.film = films[0];
    });

    this.route.params.subscribe((params) => {
      this.imdbId = params.id;
    });

    this.filmsSrv.favouriteChange$.subscribe((favourite) => {
      this.favourite = favourite;
    });

    this.filmsSrv.searchById(this.imdbId);
  }

  addToFavourites() {
    this.filmsSrv.addToFavourites(this.imdbId, this.authSrv.user._id);
  }
}
