import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeverEndsComponent } from './never-ends.component';

describe('NeverEndsComponent', () => {
  let component: NeverEndsComponent;
  let fixture: ComponentFixture<NeverEndsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeverEndsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeverEndsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
