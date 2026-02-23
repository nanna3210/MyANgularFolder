import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatyAllComponent } from './maty-all.component';

describe('MatyAllComponent', () => {
  let component: MatyAllComponent;
  let fixture: ComponentFixture<MatyAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatyAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatyAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
