import { Component, OnInit } from '@angular/core';

import { FilmsService } from '../../services/films.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.css']
})
export class FilmsPageComponent implements OnInit {
  private films = [];
  private page = 0;
  private totalPages = 0;
  // private title: String;
  // private year: Number;
  // private error = null;
  // private feedbackEnabled = false;
  // private processing = false;

  constructor(private filmsSrv: FilmsService, private authSrv: AuthService) { }

  ngOnInit() {
    this.filmsSrv.filmsChange$.subscribe((films) => {
      this.films = films;
      this.page = this.filmsSrv.page;
      this.totalPages = this.filmsSrv.totalPages;
    });

    this.filmsSrv.init();
    this.filmsSrv.filmsByUser(this.authSrv.user._id);
  }

  onPreviousPage() {
    this.filmsSrv.previousPage();
  }

  onNextPage() {
    this.filmsSrv.nextPage();
  }
}
