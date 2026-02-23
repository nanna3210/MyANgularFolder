import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalDemoComponent } from './interval-demo.component';

describe('IntervalDemoComponent', () => {
  let component: IntervalDemoComponent;
  let fixture: ComponentFixture<IntervalDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
