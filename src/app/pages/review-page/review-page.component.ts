import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilmsService } from '../../services/films.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  imdbID: String;
  review: any;
  feedbackEnabled = false;
  processing = false;

  constructor(private filmsSrv: FilmsService, private authSrv: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.imdbID = params.id;
    });
  }

  submitForm(form) {
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.filmsSrv.addReview(this.imdbID, this.authSrv.user._id, this.review);
      this.processing = false;
    }
  }

  back() {
    window.history.back();
  }
}
