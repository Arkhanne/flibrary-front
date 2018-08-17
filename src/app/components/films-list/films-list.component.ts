import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  @Input() films: Object;
  @Input() page: Object;
  @Input() totalPages: Object;
  @Output() previousPg = new EventEmitter<boolean>();
  @Output() nextPg = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  previousPage() {
    this.previousPg.emit();
  }

  nextPage() {
    this.nextPg.emit();
  }
}
