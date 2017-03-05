import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingLettersComponent } from './moving-letters.component';

describe('MovingLettersComponent', () => {
  let component: MovingLettersComponent;
  let fixture: ComponentFixture<MovingLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingLettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
