import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargGridComponent } from './larg-grid.component';

describe('LargGridComponent', () => {
  let component: LargGridComponent;
  let fixture: ComponentFixture<LargGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
