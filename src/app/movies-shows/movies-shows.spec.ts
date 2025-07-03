import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesShows } from './movies-shows';

describe('MoviesShows', () => {
  let component: MoviesShows;
  let fixture: ComponentFixture<MoviesShows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesShows]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesShows);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
