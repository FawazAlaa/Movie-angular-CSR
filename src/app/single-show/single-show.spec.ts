import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShow } from './single-show';

describe('SingleShow', () => {
  let component: SingleShow;
  let fixture: ComponentFixture<SingleShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleShow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
