import { Component, OnInit, Input } from '@angular/core';

import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() film = {
    imdbID: Number,
    Title: String,
    Year: Number,
    reviews: Array
  };

  favourite = false;

  constructor(private filmsSrv: FilmsService) { }

  ngOnInit() {
    this.filmsSrv.favouriteChange$.subscribe((favourite) => {
      this.favourite = favourite;
    });
  }

}
