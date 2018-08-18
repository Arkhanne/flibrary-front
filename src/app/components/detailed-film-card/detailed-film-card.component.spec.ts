import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedFilmCardComponent } from './detailed-film-card.component';

describe('DetailedFilmCardComponent', () => {
  let component: DetailedFilmCardComponent;
  let fixture: ComponentFixture<DetailedFilmCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedFilmCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedFilmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
