import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCellComponent } from './one-cell.component';

describe('OneCellComponent', () => {
  let component: OneCellComponent;
  let fixture: ComponentFixture<OneCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
