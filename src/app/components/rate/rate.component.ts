import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  @Input() film: Object;

  constructor() { }

  ngOnInit() {
  }

}
