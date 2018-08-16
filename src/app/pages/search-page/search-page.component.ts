import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  films = [];
  title: string;
  year: number;
  error = null;
  feedbackEnabled = false;
  processing = false;
  noData = false;

  constructor(private filmsSrv: FilmsService) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.filmsSrv.search(this.title, this.year)
        .then((data: any) => {
          console.log(data.Search);
          this.films = data.Search;
          this.processing = false;
        })
        .catch(error => {
          if (error.error.code === 'no-data') {
            this.noData = true;
          }
          this.processing = false;
          console.log(error);
        });
    }
  } 

  resetError() {
    this.noData = false;
  }
}
