import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NineCellsComponent } from './nine-cells.component';

describe('NineCellsComponent', () => {
  let component: NineCellsComponent;
  let fixture: ComponentFixture<NineCellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NineCellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NineCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
