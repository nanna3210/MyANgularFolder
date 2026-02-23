import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEventDemoComponent } from './from-event-demo.component';

describe('FromEventDemoComponent', () => {
  let component: FromEventDemoComponent;
  let fixture: ComponentFixture<FromEventDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromEventDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromEventDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
