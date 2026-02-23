import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfFromDemoComponent } from './of-from-demo.component';

describe('OfFromDemoComponent', () => {
  let component: OfFromDemoComponent;
  let fixture: ComponentFixture<OfFromDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfFromDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfFromDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
