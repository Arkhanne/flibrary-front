import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  private films = [];
  private page = 0;
  private totalPages = 0;
  private title: String;
  private year: Number;
  private error = null;
  private feedbackEnabled = false;
  private processing = false;

  constructor(private filmsSrv: FilmsService) { }

  ngOnInit() {
    this.filmsSrv.filmsChange$.subscribe((films) => {
      this.films = films;
      this.page = this.filmsSrv.page;
      this.totalPages = this.filmsSrv.totalPages;
    });
  }

  submitForm(form) {
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.filmsSrv.init();
      this.filmsSrv.search(this.title, this.year);
      this.processing = false;
    }
  }

  resetError() {
  }

  onPreviousPage() {
    this.filmsSrv.previousPage();
  }

  onNextPage() {
    this.filmsSrv.nextPage();
  }
}
