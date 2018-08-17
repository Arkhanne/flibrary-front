import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
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
