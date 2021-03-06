import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input() film: {
    imdbID: String,
    Poster: String,
    Title: String,
    Year: Number
  };

  constructor() { }

  ngOnInit() {
  }

}
