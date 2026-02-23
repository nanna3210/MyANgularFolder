import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToArrayDemoComponent } from './to-array-demo.component';

describe('ToArrayDemoComponent', () => {
  let component: ToArrayDemoComponent;
  let fixture: ComponentFixture<ToArrayDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToArrayDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToArrayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
