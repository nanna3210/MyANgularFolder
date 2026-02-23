import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatyoptionComponent } from './matyoption.component';

describe('MatyoptionComponent', () => {
  let component: MatyoptionComponent;
  let fixture: ComponentFixture<MatyoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatyoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatyoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
