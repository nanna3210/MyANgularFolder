import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservdmoComponent } from './observdmo.component';

describe('ObservdmoComponent', () => {
  let component: ObservdmoComponent;
  let fixture: ComponentFixture<ObservdmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservdmoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservdmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
