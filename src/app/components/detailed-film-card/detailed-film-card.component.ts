import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detailed-film-card',
  templateUrl: './detailed-film-card.component.html',
  styleUrls: ['./detailed-film-card.component.css']
})
export class DetailedFilmCardComponent implements OnInit {
  @Input() film: Object;

  constructor() { }

  ngOnInit() {
  }

}
