import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {
  @Input() reviews: Object;

  constructor() { }

  ngOnInit() {
  }

}
