import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesMovie } from './movies-movie';

describe('MoviesMovie', () => {
  let component: MoviesMovie;
  let fixture: ComponentFixture<MoviesMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesMovie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesMovie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
