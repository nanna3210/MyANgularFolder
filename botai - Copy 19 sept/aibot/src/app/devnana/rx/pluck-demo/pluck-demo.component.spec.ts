import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluckDemoComponent } from './pluck-demo.component';

describe('PluckDemoComponent', () => {
  let component: PluckDemoComponent;
  let fixture: ComponentFixture<PluckDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluckDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluckDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
