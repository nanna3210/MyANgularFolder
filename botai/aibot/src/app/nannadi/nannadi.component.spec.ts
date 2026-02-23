import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NannadiComponent } from './nannadi.component';

describe('NannadiComponent', () => {
  let component: NannadiComponent;
  let fixture: ComponentFixture<NannadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NannadiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NannadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
