import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsPieComponent } from './charts-pie.component';

describe('ChartsPieComponent', () => {
  let component: ChartsPieComponent;
  let fixture: ComponentFixture<ChartsPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsPieComponent]
    });
    fixture = TestBed.createComponent(ChartsPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
