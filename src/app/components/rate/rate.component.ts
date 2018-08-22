import { Component, OnInit, Input } from '@angular/core';

import { FilmsService } from '../../services/films.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  @Input() film: {
    Metascore: Number,
    imdbID: String,
    score: Number
  };

  score = 'N/A';
  favourite = false;

  constructor(private filmsSrv: FilmsService, private authSrv: AuthService) {}

  ngOnInit() {
    this.filmsSrv.scoreChange$.subscribe((score) => {
      this.score = score;
    });

    this.filmsSrv.favouriteChange$.subscribe((favourite) => {
      this.favourite = favourite;
    });
  }

  vote(imdbID, score) {
    this.filmsSrv.vote(imdbID, this.authSrv.user._id, score);
  }
}
