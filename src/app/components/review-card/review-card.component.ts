import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {
  @Input() review: {
    userId,
    date,
    review
  };

  constructor() { }

  ngOnInit() {
  }

}
