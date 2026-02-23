import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviMaaComponent } from './devi-maa.component';

describe('DeviMaaComponent', () => {
  let component: DeviMaaComponent;
  let fixture: ComponentFixture<DeviMaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviMaaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviMaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
